import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Oceanic Next",
  description: "Explore the Deep Oceanic Next theme",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="antialiased">
      {children}
      </body>
      </html>
  );
}
