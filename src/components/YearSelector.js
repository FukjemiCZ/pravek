// src/components/YearSelector.js
import React, { useState, useEffect } from 'react';
import styles from './YearSelector.module.css';
import sponsors from '../data/sponsors'; // Import sponzorů

const YearSelector = () => {
  // Dynamicky získáme seznam unikátních roků ze všech sponzorů a seřadíme je
  const years = Array.from(new Set(sponsors.flatMap((sponsor) => sponsor.years))).sort((a, b) => b - a);

  // Načtení vybraného roku z URL parametrů nebo localStorage
  const getYearFromUrlOrLocalStorage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const yearFromUrl = urlParams.get('year');
    return yearFromUrl || localStorage.getItem('selectedYear') || years[0];
  };

  const [selectedYear, setSelectedYear] = useState(getYearFromUrlOrLocalStorage());

  // Funkce pro změnu výběru roku a aktualizaci URL
  const handleYearChange = (year) => {
    setSelectedYear(year);
    localStorage.setItem('selectedYear', year); // Uloží vybraný rok do localStorage
    window.history.pushState({}, '', `?year=${year}`); // Aktualizuje URL parametr
  };

  return (
    <div className={styles.yearRadios}>
      {years.map((year) => (
        <label key={year} className={`${styles.yearRadioLabel} ${styles[`year-${year}`]}`}>
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
  );
};

export default YearSelector;
