<<<<<<< HEAD
# MP4_YELPREC
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# MP4_YelpRestaurantRecommendation

# Netlify deployed website link: [click here](https://main--nycyelprecommende.netlify.app/)

Required Installations: 

npm install axios

npm install react-icons --save

npm install @supabase/supabase-js

npm install next-routes --save

npm install @tensorflow/tfjs-node

npm install csv-parser

# Questions: 
What are the design principles of your site? (Color pallette, fonts, layout, etc.)
- My color pallete is a simple white and "yelp-red" pallete that highlights the content on the page. I used a flex and card based layout with a search bar component that makes my website look cohesive.

What is the purpose of your site? Why does it need to exist?
- The purpose of the website is to allow users to find popular NYC restaurants. The user can also add their favorite restaurants and have the data persist to a database. Eventually I will implement the ML model I created to recommend a restaurant based on user preference history but that was out of the scope of this class so I was unable to design it in time for the final project.

Does your site look good on multiple screen sizes
- Yes! I used a mix of flex, relative, and fixed layouts for my site components.

What is the Netlify URL of your site
- Netlify deployed website link: [click here](https://main--nycyelprecommende.netlify.app/)

How does your site use state to keep track of user interaction?
- My site uses state to keep track of user interaction

Does your site fetch data from: 
an internal source?:
- Yes, I am storing the user preferences(and a large amount of restaurants queried historically from Yelp) in a SupaBase SQL server
a third party API?
- Yes, I created a feature to fetch data from the Yelp API in the Search For New Restaurants page

Does your site persist data using a third-party tool or database
- Yes my website will dynamically insert and read user preferences and Yelp's restaurant data to SupaBase