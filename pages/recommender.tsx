// // pages/recommendations.tsx
// import React, { useState } from 'react';
// import Header from '../components/Header';
// import styles from '../styles/Recommendations.module.css';

// const Recommendations: React.FC = () => {
//   const [userID, setUserID] = useState<string>('');
//   const [recommendations, setRecommendations] = useState<any[]>([]);
//   const [error, setError] = useState<string>('');

//   const fetchRecommendations = async () => {
//     try {
//       const response = await fetch(`/api/recommend?userID=${encodeURIComponent(userID)}`);
//       const data = await response.json();

//       if (response.ok) {
//         setRecommendations(data);
//         setError('');
//       } else {
//         setError(data.error || 'Failed to fetch recommendations');
//       }
//     } catch (err) {
//       console.error('Error fetching recommendations:', err);
//       setError('Failed to fetch recommendations');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Header />
//       <div className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="userID" className={styles.label}>User ID (Email):</label>
//           <input
//             type="email"
//             id="userID"
//             value={userID}
//             onChange={(e) => setUserID(e.target.value)}
//             placeholder="Enter your email to get recommendations"
//             className={styles.input}
//             required
//           />
//         </div>
//         <button onClick={fetchRecommendations} className={styles.button}>Get Recommendations</button>
//         {error && <p className={styles.feedback}>{error}</p>}
//       </div>
//       {recommendations.length > 0 && (
//         <ul className={styles.list}>
//           {recommendations.map((recommendation, index) => (
//             <li key={index} className={styles.card}>
//               <h3 className={styles.cardTitle}>{recommendation.restaurant_name}</h3>
//               <p className={styles.cardText}>Cuisine: {recommendation.cuisine}</p>
//               <p className={styles.cardText}>Rating: {recommendation.rating}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Recommendations;
