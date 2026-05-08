import React from 'react';
import styles from './Badge.module.css';

export default function Badge({ label, type = 'gray' }) {
  return <span className={`${styles.badge} ${styles[type]}`}>{label}</span>;
}
