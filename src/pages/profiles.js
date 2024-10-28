import React from 'react';
import Layout from '@theme/Layout';
import styles from './profiles.module.css'; // Vytvoříme CSS soubor pro stylizaci

const profiles = [
  {
    name: 'Jan Novák',
    amount: '10 000 Kč',
    message: 'Jmenuji se Elena Košková. Je mi 18 let a studuji Sociální činnost. Miluju cestování, sport, pomáhání druhým lidem, boření stereotypů a překonávání svých hranic. <br> Už odmalička svůj život sdílím se svalovou dystrofií. Často je to boj, ale stojí za to! <br> Čím jsem starší, tak se můj zdravotní stav zhoršuje, vyžaduje neustále větší množství terapií a operací. Existuje spousta kompenzačních pomůcek nebo rehabilitací, které mi pomáhají udržovat zdravotní stav, či by pomohly žít aktivnější život, ale pojišťovna je často nehradí a já si je finančně nemohu dovolit. <br>Kromě rehabilitací, pomáhá pohyb jako takový, proto se snažím sportovat, a tak bych si moc ráda pořídila elektrický handbike, který i se svým omezením dokážu dobře ovládat. < br>Abych se mohla pohybovat venku s kamarády, nezávisle na pomoci někoho jiného, mě teď čeká pořízení přídavného pohonu k vozíku. Což se pojí k mému cíli: žít život naplno a být co nejvíc samostatná. <br>Chtěla bych všem moc poděkovat za jakoukoliv podporu. Ohromně si jí vážím. A doufám, že se chopím příležitosti a podaří se mi pomoct zase někomu jinému. ',
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
