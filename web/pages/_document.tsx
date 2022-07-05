import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white  md:bg-gradient-to-b md:from-white md:to-slate-100  min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
