import Script from "next/script";
import { useEffect, useState } from "react";

const EechichaScript = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if the script has already been loaded (e.g., in another component)
    if (window._iwezd) {
      setLoaded(true);
      return;
    }

    const handleLoad = () => {
      if (window._iwezd) {
        setLoaded(true);
      }
    };

    const handleError = () => {
      setError(true);
    };

    if (!loaded && !error) {
      window._ahnwxu = handleError;
    }

    // Attach event listeners to the dynamically created script
    if (!loaded && !error) {
      window._iwezd = handleLoad;
    }
  }, [loaded, error]);

  if (loaded) {
    return null; // Or render something else if needed
  }

  if (error) {
    console.error("Failed to load eechicha script.");
    return null; // Or a fallback component
  }

  return (
    <>
      <Script
        src="//eechicha.com/act/files/ntfc.min.js?p=8930403"
        strategy="beforeInteractive" // Important: Load before other scripts
        data-cfasync="false"
      />
      <Script
        src="//eechicha.com/ntfc.php?p=8930402"
        strategy="beforeInteractive" // Important: Load before other scripts
        data-cfasync="false"
        async
      />
    </>
  );
};

export default EechichaScript;
