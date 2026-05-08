import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import Badge from '../components/Badge';
import styles from './Users.module.css';

const USERS = [
  { name: 'Alice Johnson',  email: 'alice@example.com',  dept: 'Engineering', role: 'Admin',     status: 'active',   bg: '#E1F5EE', tc: '#0F6E56' },
  { name: 'Bob Martinez',   email: 'bob@example.com',    dept: 'Frontend',    role: 'Developer', status: 'active',   bg: '#EEEDFE', tc: '#534AB7' },
  { name: 'Carol Smith',    email: 'carol@example.com',  dept: 'Product',     role: 'Designer',  status: 'active',   bg: '#FAEEDA', tc: '#854F0B' },
  { name: 'David Lee',      email: 'david@example.com',  dept: 'Backend',     role: 'Developer', status: 'inactive', bg: '#FAECE7', tc: '#993C1D' },
  { name: 'Eva Patel',      email: 'eva@example.com',    dept: 'Operations',  role: 'Admin',     status: 'active',   bg: '#E6F1FB', tc: '#185FA5' },
  { name: 'Frank Wilson',   email: 'frank@example.com',  dept: 'Mobile',      role: 'Developer', status: 'active',   bg: '#EAF3DE', tc: '#3B6D11' },
  { name: 'Grace Kim',      email: 'grace@example.com',  dept: 'Marketing',   role: 'Designer',  status: 'active',   bg: '#FBEAF0', tc: '#993556' },
  { name: 'Henry Brown',    email: 'henry@example.com',  dept: 'DevOps',      role: 'Developer', status: 'inactive', bg: '#FCEBEB', tc: '#A32D2D' },
];

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('');
}

function roleBadgeType(role) {
  if (role === 'Admin') return 'purple';
  if (role === 'Designer') return 'blue';
  return 'gray';
}

export default function Users() {
  return (
    <div>
      <PageHeader title="Users">
        <Button>Filter</Button>
        <Button variant="primary">+ Add User</Button>
      </PageHeader>

      <div className={styles.content}>
        <div className={styles.statGrid}>
          <StatCard label="Total Users" value="8"  sub="↑ 2 this week" />
          <StatCard label="Active"      value="6"  sub="75% active rate" />
          <StatCard label="Admins"      value="2"  sub="Full access" subType="purple" />
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span>All Users</span>
            <span className={styles.cardSub}>8 total</span>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u) => (
                <tr key={u.email}>
                  <td>
                    <div className={styles.avatar} style={{ background: u.bg, color: u.tc }}>
                      {initials(u.name)}
                    </div>
                  </td>
                  <td className={styles.bold}>{u.name}</td>
                  <td className={styles.muted}>{u.email}</td>
                  <td>{u.dept}</td>
                  <td><Badge label={u.role} type={roleBadgeType(u.role)} /></td>
                  <td><Badge label={u.status} type={u.status === 'active' ? 'green' : 'red'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
