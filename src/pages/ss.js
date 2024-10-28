import Layout from '@theme/Layout';
import React, { useEffect, useState } from 'react';

function PreferredVersion() {
  const [preferredVersion, setPreferredVersion] = useState(null);

  useEffect(() => {
    // Přečte hodnotu z localStorage
    const version = localStorage.getItem('docs-preferred-version-default');
    setPreferredVersion(version);
  }, []);

  return (
    <Layout title="Our Sponsors">
    <div>
      Preferovaná verze dokumentace: <strong>{preferredVersion || "Nenastaveno"}</strong>
    </div>
    </Layout>
  );
}

export default PreferredVersion;