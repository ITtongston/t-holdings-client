import Script from "next/script";
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-L84TX5YGJY");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Script
        strategy="afterInteractive" // Important: Load after other interactive content
        src="https://www.googletagmanager.com/gtag/js?id=G-L84TX5YGJY"
      />
      {/*  You might not need this second script block, as the gtag function is defined in the useEffect */}
      {/*  <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L84TX5YGJY');
      </script> */}
    </>
  );
};

export default GoogleAnalytics;
