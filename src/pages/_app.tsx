import "@styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScrolling from "@app/components/SmoothScrolling"; // Ensure correct path for component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrolling>
      <Component {...pageProps} />
    </SmoothScrolling>
  );
}

export default MyApp;
