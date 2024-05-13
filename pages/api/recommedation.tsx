// // pages/api/recommend.tsx
// import { NextApiRequest, NextApiResponse } from 'next';
// import * as tf from '@tensorflow/tfjs-node';
// import { unique_user_ids, unique_restaurant_ids, items } from 'user_favorite_restaurants.csv';
// import YelpRecModel from 'yelp_rec_model';

// // Load the trained model 
// const modelPath = 'path/to/saved/model'; 
// const model = new YelpRecModel(0.7, 0.3); 
// model.load(modelPath);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userID } = req.query;

//   if (!userID) {
//     res.status(400).json({ error: 'User ID is required' });
//     return;
//   }

//   try {
//     // Generate recommendations for the userID
//     const recommendations = await model.recommend(userID as string);

//     res.status(200).json(recommendations);
//   } catch (error) {
//     console.error('Error generating recommendations:', error);
//     res.status(500).json({ error: 'Failed to generate recommendations' });
//   }
// }