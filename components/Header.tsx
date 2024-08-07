// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Menu icon
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    console.log('Menu is now:', showMenu);
  }, [showMenu]); 

  const getHeaderTitle = () => {
    switch (router.pathname) {
      case '/':
        return 'Search New Restaurants';
      case '/restaurants':
        return 'Search Existing Restaurants';
      case '/favorite_restaurants':
        return 'Add Favorite Restaurants';
      case '/view_favorites':
        return 'View Favorite Restaurants';
      default:
        return 'Welcome'; //default title 
    }
  };

  return (
    <header className={homeStyles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xW8f6ArJ20ndbwQf7zO-Wgi-AdcQ3uA3lJlSj6b0Wg&s"
        alt="Yelp Logo"
        className={homeStyles.logo}
      />
      <h1 className={homeStyles.headerTitle}>
        {getHeaderTitle()}
      </h1>
      <div className={homeStyles.menuWrapper}>
        <button className={homeStyles.menuButton} onClick={toggleMenu}>
          <FaBars />
        </button>
        {showMenu && (
          <nav className={homeStyles.menu}>
            <ul>
              <li>
                <Link href="/">Search New Restaurants</Link>
              </li>
              <li>
                <Link href="/restaurants">Search Existing Restaurants</Link>
              </li>
              <li>
                <Link href="/favorite_restaurants">Add Favorite Restaurants</Link>
              </li>
              <li>
                <Link href="/view_favorites">View Favorite Restaurants</Link>
              </li>
              <li>
                <Link href="/recommendations">Get Recommendations</Link>
              </li> 
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;