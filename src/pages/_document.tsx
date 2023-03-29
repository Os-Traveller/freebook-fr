import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* for modal to render */}
        <div id="root-modal"></div>
      </body>
    </Html>
  );
}
