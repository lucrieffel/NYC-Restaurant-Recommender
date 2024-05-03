// src/components/Header.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Menu icon
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={homeStyles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xW8f6ArJ20ndbwQf7zO-Wgi-AdcQ3uA3lJlSj6b0Wg&s" // Replace with your logo path
        alt="Yelp Logo"
        className={homeStyles.logo}
      />
      <div className={homeStyles.menuWrapper}>
        <button className={homeStyles.menuButton} onClick={toggleMenu}>
          <FaBars />
        </button>
        {showMenu && (
          <nav className={homeStyles.menu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/restaurants">View All Restaurants</Link>
              </li>
              <li>
                <Link href="/favorite_restaurants">Add Your Favorite Restaurants</Link>
              </li>
              <li>
                <Link href="/view_favorites">View Your Favorite Restaurants</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

