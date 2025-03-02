const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


router.post('/', async (req, res) => {
  const course = new Course(req.body);
  try {
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).send({ message: 'Course not found' });
    }

    res.status(200).send(course);
  } catch (error) {
    res.status(500).send({ message: 'Server error', error });
  }
});


router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/courses', async (req, res) => {
  const type = parseInt(req.query.type);

  if (isNaN(type)) {
      return res.status(400).json({ message: 'Invalid type parameter' });
  }

  try {
      const courses = await Course.find({ type });
      res.json(courses);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
});


module.exports = router;
