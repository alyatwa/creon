import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./reset.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../../public/assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/assets/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

const monument = localFont({
  variable: "--font-monument",
  src: "../../public/assets/fonts/MonumentExtended-Regular.woff2",
});

export const metadata: Metadata = {
  title: "CREON",
  description: "CREON next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${monument.variable}`}>
        {children}
      </body>
    </html>
  );
}
