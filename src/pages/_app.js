import React from "react";
import Head from "next/head";
import "./globals.css";
import "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navigations/nav1";
import Footer from "@/components/Navigations/Footer";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Tongston Entrepreneurship Group</title>
        <meta
          name="description"
          content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
        />
        <meta name="author" content="Tongston Entrepreneurship Group" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/logos/world-logo.png"
        />
        <link rel="canonical" href="https://tongston.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Tongston Entrepreneurship Group" />
        <meta
          property="og:description"
          content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
        />
        <meta
          property="og:image"
          content="/assets/images/logos/world-logo.png"
        />
        <meta property="og:url" content="https://tongston.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Tongston Entrepreneurship Group"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Tongston Entrepreneurship Group" />
        <meta
          name="twitter:description"
          content="We build valuable, profitable, and influential people, governments, businesses & non-profits."
        />
        <meta
          name="twitter:image"
          content="/assets/images/logos/world-logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
