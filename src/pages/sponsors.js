import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './sponsors.module.css';
import sponsors from '../data/sponsors'; // Import sponzorů

function Sponsors() {
  // Dynamicky získáme seznam unikátních roků ze všech sponzorů a seřadíme je
  const years = Array.from(new Set(sponsors.flatMap((sponsor) => sponsor.years))).sort((a, b) => b - a);

  // Nastavíme výchozí vybraný rok jako nejnovější rok (nejvyšší)
  const [selectedYear, setSelectedYear] = useState(years[0]);

  // Funkce pro změnu výběru roku
  const handleYearChange = (year) => {
    setSelectedYear(year); // Nastaví vybraný rok na aktuálně zvolený
  };

  // Filtrování sponzorů podle vybraného roku
  const filteredSponsors = sponsors.filter((sponsor) =>
    sponsor.years.includes(selectedYear)
  );

  return (
    <Layout title="Our Sponsors">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Our Sponsors</h1>
        <p className="text--center">We would like to thank our sponsors for their generous support.</p>

        {/* Filtrování podle roku pomocí radio buttonů */}
        <div className="text--center">
          <div className={styles.yearRadios}>
            {years.map((year) => (
              <label key={year} className={`${styles.yearBadge} ${styles.yearRadioLabel} ${styles[`year-${year}`]}`}>
                <input
                  type="radio"
                  name="year"
                  value={year}
                  checked={selectedYear === year}
                  onChange={() => handleYearChange(year)}
                  className={styles.yearRadio}
                />
                {year}
              </label>
            ))}
          </div>
        </div>

        {/* Zobrazení sponzorů */}
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
                {sponsor.years.map((year, index) => (
                  <span key={index} className={`${styles.yearBadge} ${styles[`year-${year}`]}`}>
                    {year}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Sponsors;
