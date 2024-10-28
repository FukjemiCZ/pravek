import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './sponsors.module.css';
import sponsors from '../data/sponsors'; // Statický import sponzorů

function Sponsors() {
  const [selectedYear, setSelectedYear] = useState(null);

  // Načteme preferovaný rok z localStorage po načtení komponenty
  useEffect(() => {
    const preferredYear = localStorage.getItem('docs-preferred-version-default');
    if (preferredYear) {
      setSelectedYear(preferredYear); // Uložíme přímo jako text
    }
  }, []);

  // Filtrování sponzorů podle zvoleného roku z localStorage
  const filteredSponsors = sponsors.filter((sponsor) =>
    sponsor.years.includes(selectedYear) // Porovnání jako text
  );

  return (
    <Layout title="Our Sponsors">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Sponzoři</h1>
        <p className="text--center">Tato akce je benefiční, což znamená, že velkou část financujeme z vlastních zdrojů. Pokud máte chuť a možnost nás jakkoli podpořit, neváhejte mě kontaktovat na pravekvraji@seznam.cz nebo na čísle +420 773 700 489.
Každá drobnost, například příspěvek do tomboly, nám velmi pomůže. Děkujeme!</p>

        {/* Kontrola, zda je vybrán platný rok a existují sponzoři pro tento rok */}
        {selectedYear && filteredSponsors.length > 0 ? (
          <div className={styles.sponsorsGrid}>
            {filteredSponsors.map((sponsor, index) => (
              <div key={index} className={styles.sponsorCard}>
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.sponsorLogoWrapper}>
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} className={styles.sponsorLogo} />
                  </div>
                </a>
                <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                <p className={styles.sponsorDescription}>{sponsor.description}</p>

                {/* Zobrazení roků sponzorství */}
                <div className={styles.sponsorYears}>
                  {sponsor.years
                    .filter((year) => year !== 'current') // Přidáme filtr, který odstraní 'current'
                    .map((year, index) => (
                      <span key={index} className={`${styles.yearBadge} ${styles[`year-${year}`]}`}>
                        {year}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text--center">Pro zvolený rok nemáme sponzory.</p>
        )}
      </div>
    </Layout>
  );
}

export default Sponsors;
