import React from 'react';
import Layout from '@theme/Layout';
import styles from './profiles.module.css'; // Vytvoříme CSS soubor pro stylizaci

const profiles = [
  {
    name: 'Jan Novák',
    amount: '10 000 Kč',
    message: 'Ahoj, jsem Jan a miluji programování. Jsem nadšený z nových technologií a rád se učím.',
    photo: '/profiles/Elen_profile.webp', // Vložte URL k fotografii
  },
  {
    name: 'Petra Svobodová',
    amount: '15 000 Kč',
    message: 'Ahoj, já jsem Petra! Ráda cestuji a objevování nových kultur je moje vášeň.',
    photo: 'https://example.com/photo2.jpg',
  },
  // Přidejte další profily zde
];

const ProfileCard = ({ profile }) => (
  <div className={styles.card}>
    <img src={profile.photo} alt={profile.name} className={styles.photo} />
    <h2>{profile.name}</h2>
    <p><strong>Částka:</strong> {profile.amount}</p>
    <p>{profile.message}</p>
  </div>
);

const ProfilesPage = () => (
  <Layout title="Profily" description="Profily jednotlivců">
    <div className={styles.container}>
      <h1>Komu pomáháme?</h1>
      <div className={styles.profiles}>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  </Layout>
);

export default ProfilesPage;
