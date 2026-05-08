import React from 'react';
import styles from './StatCard.module.css';

export default function StatCard({ label, value, sub, subType }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      {sub && (
        <p className={`${styles.sub} ${subType === 'red' ? styles.red : subType === 'purple' ? styles.purple : ''}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
