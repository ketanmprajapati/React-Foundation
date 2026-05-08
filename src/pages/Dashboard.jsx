import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import Badge from '../components/Badge';
import styles from './Dashboard.module.css';

const salesData = [
  { month: 'Jan', value: 6200,  pct: 55 },
  { month: 'Feb', value: 8100,  pct: 70 },
  { month: 'Mar', value: 7000,  pct: 60 },
  { month: 'Apr', value: 9800,  pct: 85 },
  { month: 'May', value: 8900,  pct: 76 },
  { month: 'Jun', value: 10600, pct: 92 },
];

const activity = [
  { text: 'Alice Johnson created a new account', time: '2m ago',  color: '#1D9E75' },
  { text: 'Order #1042 marked as shipped',        time: '15m ago', color: '#7F77DD' },
  { text: 'Product "Wireless Mouse" stock low',   time: '1h ago',  color: '#EF9F27' },
  { text: 'Return request from Bob Martinez',     time: '2h ago',  color: '#E24B4A' },
  { text: 'New product "USB Hub" added',          time: '3h ago',  color: '#1D9E75' },
];

const orders = [
  { id: '#1045', customer: 'Alice Johnson', product: 'MacBook Stand', amount: '$49.99', status: 'Delivered', badge: 'green' },
  { id: '#1044', customer: 'Bob Martinez',  product: 'Wireless Mouse', amount: '$29.99', status: 'Shipped',   badge: 'amber' },
  { id: '#1043', customer: 'Carol Smith',   product: 'USB Hub',        amount: '$39.99', status: 'Processing',badge: 'blue'  },
  { id: '#1042', customer: 'David Lee',     product: 'Keyboard',       amount: '$89.99', status: 'Delivered', badge: 'green' },
  { id: '#1041', customer: 'Eva Patel',     product: 'Monitor Arm',    amount: '$69.99', status: 'Returned',  badge: 'red'   },
];

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard">
        <Button variant="primary">Export</Button>
      </PageHeader>

      <div className={styles.content}>
        <div className={styles.statGrid}>
          <StatCard label="Total Revenue" value="$48,200" sub="↑ 12% this month" />
          <StatCard label="Total Users"   value="1,284"   sub="↑ 8 this week" />
          <StatCard label="Orders"        value="340"     sub="↑ 5% vs last week" subType="purple" />
          <StatCard label="Returns"       value="18"      sub="↑ 3 this week"     subType="red" />
        </div>

        <div className={styles.twoCol}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span>Monthly Sales</span>
              <span className={styles.cardSub}>Jan – Jun 2025</span>
            </div>
            <div className={styles.barWrap}>
              {salesData.map((row) => (
                <div key={row.month} className={styles.barRow}>
                  <span className={styles.barLabel}>{row.month}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className={styles.barVal}>${(row.value / 1000).toFixed(1)}k</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span>Recent Activity</span>
              <span className={styles.cardSub}>Today</span>
            </div>
            {activity.map((a, i) => (
              <div key={i} className={styles.actItem}>
                <div className={styles.actDot} style={{ background: a.color }} />
                <span className={styles.actText}>{a.text}</span>
                <span className={styles.actTime}>{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span>Recent Orders</span>
            <span className={styles.cardSub}>Last 5</span>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.product}</td>
                  <td>{o.amount}</td>
                  <td><Badge label={o.status} type={o.badge} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
