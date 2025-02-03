import Document, { Html, Head, Main, NextScript } from "next/document";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />

          {/* AOS script */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
