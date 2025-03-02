const express = require('express');
const router = express.Router();
const Training = require('../models/Training'); 

router.post('/', async (req, res) => {
    const { name, description, image, price, type } = req.body;

    try {
        const training = new Training({
            name,
            description,
            image,
            price,
            type
        });

        await training.save();
        res.status(201).json(training);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/', async (req, res) => {
    try {
        const trainings = await Training.find();
        res.json(trainings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const training = await Training.findById(req.params.id);
        if (!training) {
            return res.status(404).json({ message: 'Training not found' });
        }
        res.json(training);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.put('/:id', async (req, res) => {
    const { name, description, image, price, type } = req.body;

    try {
        const training = await Training.findByIdAndUpdate(req.params.id, {
            name,
            description,
            image,
            price,
            type
        }, { new: true });

        if (!training) {
            return res.status(404).json({ message: 'Training not found' });
        }

        res.json(training);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const training = await Training.findByIdAndDelete(req.params.id);
        if (!training) {
            return res.status(404).json({ message: 'Training not found' });
        }
        res.json({ message: 'Training deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
