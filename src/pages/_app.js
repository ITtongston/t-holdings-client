import React from "react";
import Head from "next/head";
import "./globals.css";
import "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackToTop } from "@/components/Navigations/B2Top";
import Chatbot from "@/components/Integrations/Chatbot";
import Monetag from "@/components/Integrations/Monetag";
import GoogleAnalytics from "@/components/Integrations/GoogleAnalytics";
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

        {/* monetag monitization -add  */}
        <meta name="monetag" content="7c5586488b3ace104bf40bb96411f245" />
        {/* monetag monitization -end */}
        <script
          src="https://pertawee.net/act/files/tag.min.js?z=8930402"
          data-cfasync="false"
          async
        ></script>

        {/* google concent manager tag */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="acb59c2d-4589-4469-8797-cb5029bc2464"
          type="text/javascript"
          async
        ></script>

        {/* Start of HubSpot Embed Code */}
        {/* <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/49303343.js"
        ></script> */}
        {/* End of HubSpot Embed Code  */}

        {/* Google Analytics Installation */}
      </Head>

      <div>
        <GoogleAnalytics />
        <Component {...pageProps} />
        {/* <div> <Monetag /> </div> */}
        {/* <Chatbot
          position="bottom-left"
          style={{ backgroundColor: "transparent", border: "1px solid black" }}
        /> */}

        <BackToTop />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
