import React from "react";
import Head from "next/head";
import Script from "next/script"; // ✅ Import Next.js Script
import "./globals.css"; // ✅ Keep only global styles
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackToTop } from "@/components/Navigations/B2Top";
import Chatbot from "@/components/Integrations/Chatbot";
import Monetag from "@/components/Integrations/Monetag";
import GoogleAnalytics from "@/components/Integrations/GoogleAnalytics";
// import GTagConsent from "@/components/Integrations/GtagConcent";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Tongston Entrepreneurship Group" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/logos/world-logo.png"
        />
        <link rel="canonical" href="https://tongston.com" />

        {/* Monetag monetization */}
        <meta name="monetag" content="7c5586488b3ace104bf40bb96411f245" />
      </Head>

      {/* External Scripts (Moved out of Head) */}
      <Script
        src="https://pertawee.net/act/files/tag.min.js?z=8930402"
        data-cfasync="false"
        strategy="lazyOnload"
      />
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="acb59c2d-4589-4469-8797-cb5029bc2464"
        strategy="lazyOnload"
      />

      {/* Google Analytics */}
      <GoogleAnalytics />

      {/* GTag Consent Script (Placed here instead of inside <Head>) */}
      <Script id="gtag-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("consent", "default", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
          });
          gtag("set", "ads_data_redaction", true);
          gtag("set", "url_passthrough", false);
        `}
      </Script>

      <div>
        <Component {...pageProps} />
        <BackToTop />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
