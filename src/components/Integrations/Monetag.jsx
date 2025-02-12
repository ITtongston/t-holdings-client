// import Script from "next/script";
// import { useEffect, useState } from "react";

// const NemtoorgeepsScript = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoaded(true);
//       // Call the onload function if it exists.  Make sure it's a function.
//       if (typeof window._peqov === "function") {
//         window._peqov();
//       }
//     };

//     const handleError = () => {
//       setHasError(true);
//       // Call the onerror function if it exists. Make sure it's a function.
//       if (typeof window._ctwqcevz === "function") {
//         window._ctwqcevz();
//       }
//     };

//     // Attach event listeners directly to the script element after it's added
//     const script = document.querySelector(
//       'script[src="//nemtoorgeeps.net/tag.min.js"]'
//     );
//     if (script) {
//       script.onload = handleLoad;
//       script.onerror = handleError;
//     }

//     // Clean up event listeners on unmount
//     return () => {
//       if (script) {
//         script.onload = null;
//         script.onerror = null;
//       }
//     };
//   }, []); // Empty dependency array ensures this runs only once on mount and unmount

//   // Dynamically create the first script tag.  This is important for Next.js
//   const generateEncodedScript = () => {
//     const encodedScript = `
//     (()=>{
//       // ... (Your very long, obfuscated script code goes here) ...
//     })();
//     `;

//     return (
//       <script
//         key="encoded-script" // Important: Add a key to avoid hydration mismatches
//         dangerouslySetInnerHTML={{ __html: encodedScript }}
//         data-cfasync="false"
//         type="text/javascript"
//       />
//     );
//   };

//   return (
//     <>
//       {generateEncodedScript()}

//       <Script
//         key="nemtoorgeeps-script" // Important: Add a key to avoid hydration mismatches
//         src="//nemtoorgeeps.net/tag.min.js"
//         data-zone="8930526"
//         data-cfasync="false"
//         async
//         strategy="lazyOnload" // Use lazyOnload for better performance
//       />
//     </>
//   );
// };

// export default NemtoorgeepsScript;
import Script from "next/script";

const PertaweeScript = () => {
  return (
    <Script
      src="https://pertawee.net/act/files/tag.min.js?z=8930402"
      data-cfasync={false}
      async
      strategy="lazyOnload" // Recommended for performance
    />
  );
};

export default PertaweeScript;
