// pages/api/recommend.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import * as tf from '@tensorflow/tfjs-node';
import { unique_user_ids, unique_restaurant_ids, items } from '../../path/to/your/model/data'; // Adjust the path accordingly
import YelpRecModel from '../../path/to/your/model'; // Adjust the path accordingly

// Load the trained model (adjust the path to your saved model)
const modelPath = 'path/to/saved/model'; // Path to your saved model
const model = new YelpRecModel(1.0, 1.0); // Adjust weights if necessary
model.load(modelPath);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userID } = req.query;

  if (!userID) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  try {
    // Generate recommendations (this is a placeholder, adjust according to your model's API)
    const recommendations = await model.recommend(userID as string);

    res.status(200).json(recommendations);
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
}