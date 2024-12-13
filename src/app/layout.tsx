import "./globals.css";
import Head from "next/head";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <Head>
          <title>Deep Oceanic Next</title>
          <meta name="description" content="Explore the Deep Oceanic Next theme" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
      {children}
      </body>
      </html>
  );
}