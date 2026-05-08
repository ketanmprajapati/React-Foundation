import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'default', onClick }) {
  return (
    <button
      className={`${styles.btn} ${variant === 'primary' ? styles.primary : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
