import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '▪' },
  { to: '/users',     label: 'Users',     icon: '▪' },
  { to: '/products',  label: 'Products',  icon: '▪' },
  { to: '/settings',  label: 'Settings',  icon: '▪' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>R</div>
        <span className={styles.brandName}>React Foundation</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.avatar}>AD</div>
        <div>
          <p className={styles.userName}>Admin</p>
          <p className={styles.userEmail}>admin@app.com</p>
        </div>
      </div>
    </aside>
  );
}
