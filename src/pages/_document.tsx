import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="theme-color" content="#7b2979" />
        <meta name="description" content="Genez Learnings LLP helps students and professionals master Clinical Data Management and life Science skills through interactive online internships." />
        <meta property="og:title" content="Genez Learnings LLP" />
        <meta property="og:description" content="Boost your Life Science career with Clinical Data Management skills." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
