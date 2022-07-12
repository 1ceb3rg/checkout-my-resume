import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/open-sans";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
