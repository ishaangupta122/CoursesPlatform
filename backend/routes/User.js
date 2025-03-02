const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET =
	'f4d5c6e7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1c2d3e4f5';

router.post('/signup', async (req, res) => {
	const { name, email, password } = req.body;

	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		}

		user = new User({
			name,
			email,
			password,
		});

		await user.save();

		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: '1h',
		});
		res.status(201).json({
			token,
			user: { id: user._id, name: user.name, email: user.email },
		});
	} catch (error) {
		res.status(500).json({ msg: 'Server error' });
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ msg: 'Invalid credentials' });
		}

		const isMatch = await user.matchPassword(password);
		if (!isMatch) {
			return res.status(400).json({ msg: 'Invalid credentials' });
		}

		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: '1h',
		});
		res.json({
			token,
			user: { id: user._id, name: user.name, email: user.email },
		});
	} catch (error) {
		res.status(500).json({ msg: 'Server error' });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id).populate('courses');

		if (!user) {
			return res.status(404).send({ message: 'User not found' });
		}

		res.status(200).send(user);
	} catch (error) {
		res.status(500).send({ message: 'Server error', error });
	}
});

router.get('/', async (req, res) => {
	try {
		const users = await User.find().populate('courses');
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: 'Server error', error });
	}
});

router.get('/:id/courses', async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id).populate('courses');
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({ courses: user.courses });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error });
	}
});

router.post('/:id/courses', async (req, res) => {
	const { id } = req.params;
	const { courseId } = req.body;

	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const course = await Course.findById(courseId);
		if (!course) {
			return res.status(404).json({ message: 'Course not found' });
		}

		if (!user.courses.includes(courseId)) {
			user.courses.push(courseId);
			await user.save();
		}

		res.status(200).json({ message: 'Course added to user', user });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error });
	}
});

module.exports = router;
