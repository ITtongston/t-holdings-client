import React from "react";
import Head from "next/head";
import "./globals.css";
import "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "@/components/Navigations/nav1";
// import Footer from "@/components/Navigations/Footer";

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
