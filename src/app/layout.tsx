import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Tip Calculator App",
  description: "Calculate tips easily with this tip calculator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      </head>
      <body
        className={`${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
