import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '../components/config/supabaseClient';
import Header from '../components/Header';
import restaurantStyles from '../styles/Restaurants.module.css';
import cardStyles from '../styles/Card.module.css';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component


interface Restaurant {
  restaurant_id: string;
  restaurant_name: string;
  image_url?: string;
  location?: string;
  url?: string;
  categories: string;
  rating: number;
  review_count: number;
  display_phone: string;
}

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function fetchRestaurants() {
      let query = supabase.from('yelp_restaurants').select('*');

      if (searchTerm) {
        query = query.ilike('categories', `%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
      } else {
        setRestaurants(data);
      }
      setLoading(false);
    }
    fetchRestaurants();
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (loading) return <div className={restaurantStyles.loading}>Loading...</div>;
  if (error) return <div className={restaurantStyles.error}>Error: {error}</div>;

  return (
    <div className={restaurantStyles.container}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className={restaurantStyles.list}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.restaurant_id} className={cardStyles.card}>
            <h3 className={cardStyles.cardTitle}>{restaurant.restaurant_name}</h3>
            {restaurant.image_url && (
              <img src={restaurant.image_url} alt={restaurant.restaurant_name} className={cardStyles.cardImage} />
            )}
            {restaurant.location && <p className={cardStyles.cardText}>Location: {restaurant.location}</p>}
            <p className={cardStyles.cardText}>Phone: {restaurant.display_phone}</p>
            <p className={cardStyles.cardText}>Category: {restaurant.categories.split(',')[0]}</p>
            <p className={cardStyles.cardText}>Rating: {restaurant.rating} Stars ({restaurant.review_count} Reviews)</p>
            <a href={restaurant.url} target="_blank" rel="noopener noreferrer" className={cardStyles.cardLink}>View on Yelp</a>
          </div>
        ))}
      </div>
      <div className={restaurantStyles.backButtonContainer}>
        <Link href="/" legacyBehavior>
          <a className={restaurantStyles.backButton}>Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Restaurants;