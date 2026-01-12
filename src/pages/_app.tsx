import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Montserrat } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} ${montserrat.variable} font-sans bg-white text-gray-800`}
    >
      <Head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Apple Home Screen App Name */}
        <meta name="apple-mobile-web-app-title" content="Gene Z" />

        {/* ✅ Single cache-safe favicon */}
        <link rel="icon" href="/favicon-v2.ico" />

        {/* Apple devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
