//create a next API route that acts like a server-side proxy.
//The front-end code should request data from the API route instead of the external API directly.
// pages/api/search.tsx
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type YelpSearchResponse = any;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<YelpSearchResponse | { message: string }>
  ) {
      const apiKey = process.env.YELP_API_KEY; // key is stored in .env.local file
      const { term, location } = req.query;
  
      const config = {
          headers: {
              'Authorization': `Bearer ${apiKey}`,
          },
          params: {
              term: (term as string).replace('+', ' '),
              location: location as string,
              limit: 50,
              categories: '',
              sort_by: 'rating', //sort by yelp rating
          },
      };
      try {
          const response = await axios.get('https://api.yelp.com/v3/businesses/search', config);
          
          // Add a description of the results
          const description = `Showing top 50 ${term} restaurants:`;
  
          res.status(200).json({ description, ...response.data }); // successful query response
      } catch (error: any) {
          console.error('Error fetching data from Yelp:', error);
          res.status(error.response?.status || 500).json({ message: 'Error fetching data' });
      }
}