import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import styles from './Settings.module.css';

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      className={`${styles.toggle} ${on ? styles.toggleOn : styles.toggleOff}`}
      onClick={() => setOn(!on)}
    />
  );
}

export default function Settings() {
  return (
    <div>
      <PageHeader title="Settings" />

      <div className={styles.content}>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.card}>
              <p className={styles.sectionTitle}>Profile</p>
              <div className={styles.row}>
                <span className={styles.label}>Full Name</span>
                <input className={styles.input} defaultValue="Admin User" />
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Email</span>
                <input className={styles.input} defaultValue="admin@app.com" />
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Timezone</span>
                <input className={styles.input} defaultValue="Asia/Kolkata" />
              </div>
              <div className={styles.rowAction}>
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.sectionTitle}>Password</p>
              <div className={styles.row}>
                <span className={styles.label}>Current Password</span>
                <input className={styles.input} type="password" defaultValue="12345678" />
              </div>
              <div className={styles.row}>
                <span className={styles.label}>New Password</span>
                <input className={styles.input} type="password" placeholder="Enter new password" />
              </div>
              <div className={styles.rowAction}>
                <Button variant="primary">Update Password</Button>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.card}>
              <p className={styles.sectionTitle}>Notifications</p>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Email Alerts</p>
                  <p className={styles.desc}>Receive order and account emails</p>
                </div>
                <Toggle defaultOn={true} />
              </div>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Push Notifications</p>
                  <p className={styles.desc}>Browser push alerts</p>
                </div>
                <Toggle defaultOn={false} />
              </div>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Weekly Reports</p>
                  <p className={styles.desc}>Summary every Monday</p>
                </div>
                <Toggle defaultOn={true} />
              </div>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Low Stock Alerts</p>
                  <p className={styles.desc}>Notify when stock is below 5</p>
                </div>
                <Toggle defaultOn={true} />
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.sectionTitle}>Appearance</p>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Dark Mode</p>
                  <p className={styles.desc}>Follow system preference</p>
                </div>
                <Toggle defaultOn={false} />
              </div>
              <div className={styles.row}>
                <div>
                  <p className={styles.label}>Compact View</p>
                  <p className={styles.desc}>Reduce table row spacing</p>
                </div>
                <Toggle defaultOn={false} />
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Language</span>
                <input className={styles.input} defaultValue="English (US)" style={{ width: 140 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
