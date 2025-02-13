import { useEffect, useState } from "react";

export default function HubSpotWidget({
  hubSpotId = "49303343", // Default HubSpot ID
  position = "bottom-right", // Default position
  style = {}, // Add default empty style object
  ...rest // Spread any other props you might need
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "hs-script-loader";
      script.async = true;
      script.defer = true;
      script.src = `//js-na1.hs-scripts.com/${hubSpotId}.js`;

      script.onload = () => {
        setIsLoaded(true);
      };

      script.onerror = () => {
        setHasError(true);
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
        // Clean up any HubSpot-related globals if necessary (if HubSpot sets any)
      };
    }
  }, [hubSpotId]); // Add hubSpotId to dependency array

  if (typeof window === "undefined") {
    return null;
  }

  // Define styles based on the position prop
  const positionStyles = {
    "bottom-right": {
      position: "fixed",
      bottom: "20px",
      right: "20px",
    },
    "bottom-left": {
      position: "fixed",
      bottom: "20px",
      left: "20px",
    },
    "top-right": {
      position: "fixed",
      top: "20px",
      right: "20px",
    },
    "top-left": {
      position: "fixed",
      top: "20px",
      left: "20px",
    },
    // Add more positions as needed
  };

  const widgetStyle = {
    ...(positionStyles[position] || positionStyles["bottom-right"]),
    ...style,
  }; // Combine position and custom styles

  if (!isLoaded && !hasError) {
    return <div style={widgetStyle}>Loading HubSpot widget...</div>; // Apply styles to loading message
  }

  if (hasError) {
    return <div style={widgetStyle}>Error loading HubSpot widget.</div>; // Apply styles to error message
  }

  // Widget loaded successfully.  You can customize the container if needed.
  return <div style={widgetStyle} {...rest} />; // Apply styles and spread any other props
}
