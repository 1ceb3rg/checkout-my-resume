import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {"<!--sse-->"}
      <Head />
      <body className="mbg-gradient-to-b min-h-screen bg-white from-white  to-slate-50 py-2 px-1  font-sans">
        <Main />
        <NextScript />
      </body>
      {"<!--/sse-->"}
    </Html>
  );
}
