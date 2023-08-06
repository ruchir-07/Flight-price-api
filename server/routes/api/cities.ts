import express from 'express';
import mongoose from 'mongoose';
import City from '../../models/City';
const router = express.Router();

// @route  GET api/cities
// @desc   get different indian cities details
// @access  Public
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;