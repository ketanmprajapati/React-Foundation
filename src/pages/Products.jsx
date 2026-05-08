import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import Badge from '../components/Badge';
import styles from './Products.module.css';

const PRODUCTS = [
  { name: 'MacBook Stand',  cat: 'Accessories', price: '$49.99', stock: 'In Stock',     badge: 'green', emoji: '🖥️' },
  { name: 'Wireless Mouse', cat: 'Peripherals', price: '$29.99', stock: 'Low Stock',    badge: 'amber', emoji: '🖱️' },
  { name: 'USB-C Hub',      cat: 'Accessories', price: '$39.99', stock: 'In Stock',     badge: 'green', emoji: '🔌' },
  { name: 'Mech Keyboard',  cat: 'Peripherals', price: '$89.99', stock: 'In Stock',     badge: 'green', emoji: '⌨️' },
  { name: 'Monitor Arm',    cat: 'Furniture',   price: '$69.99', stock: 'Out of Stock', badge: 'red',   emoji: '🦾' },
  { name: 'Webcam HD',      cat: 'Video',       price: '$59.99', stock: 'In Stock',     badge: 'green', emoji: '📷' },
];

export default function Products() {
  return (
    <div>
      <PageHeader title="Products">
        <Button>Filter</Button>
        <Button variant="primary">+ Add Product</Button>
      </PageHeader>

      <div className={styles.content}>
        <div className={styles.statGrid}>
          <StatCard label="Total Products" value="24" sub="↑ 3 this month" />
          <StatCard label="In Stock"       value="20" sub="83% available" />
          <StatCard label="Low Stock"      value="3"  sub="Needs attention" subType="red" />
          <StatCard label="Categories"     value="5"  sub="Active" subType="purple" />
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span>Product Catalogue</span>
            <span className={styles.cardSub}>Showing 6 of 24</span>
          </div>
          <div className={styles.grid}>
            {PRODUCTS.map((p) => (
              <div key={p.name} className={styles.prodCard}>
                <div className={styles.prodImg}>{p.emoji}</div>
                <div className={styles.prodBody}>
                  <p className={styles.prodName}>{p.name}</p>
                  <p className={styles.prodCat}>{p.cat}</p>
                  <div className={styles.prodFooter}>
                    <span className={styles.prodPrice}>{p.price}</span>
                    <Badge label={p.stock} type={p.badge} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
