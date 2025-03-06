import React, { useState, useEffect } from "react";
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
import Image from "next/image";
// import GTagConsent from "@/components/Integrations/GtagConcent";
import { motion } from "framer-motion";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  // function to simulate website loading with promise
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const text = "TONGSTON - GROUP".split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Staggering effect
    }),
  };

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
      {loading ? (
        <div className="loading-overlay bg-background-light w-full h-screen fixed flex  flex-col gap-y-3   md:flex-row  flex-1 justify-center items-center p-4">
          <div className="loading-ball w-[300px] h-[300px] p-2 flex flex-col gap-y-8 justify-center items-center z-30 relative">
            <Image
              priority
              alt="loading-spinner"
              src={"/assets/images/logos/world-logo.png"}
              width={500}
              height={500}
              className="    w-[100px] h-[100px]  md:w-[200] md:h-[200] object-cover"
            />
          </div>
          <motion.span
            initial="hidden"
            animate="visible"
            className="font-school text-3xl md:text-5xl text-center font-black  text-transparent bg-clip-text bg-gradient-to-br  from-background-dark    via-background-danger  to-background-gold flex"
          >
            {text.map((letter, i) => (
              <motion.span key={i} custom={i} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
      ) : (
        <div className="fade">
          <Component {...pageProps} />
          <BackToTop />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default MyApp;
