import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetDressed - AI Personal Styling",
  description: "AI-powered personal styling app for the UAE. Get outfit recommendations in 3 seconds.",
  keywords: "AI styling, UAE fashion, wardrobe management, personal stylist, Dubai fashion, Abu Dhabi style, outfit recommendations",
  authors: [{ name: "GetDressed Team" }],
  openGraph: {
    title: "GetDressed - AI Personal Styling for UAE",
    description: "Transform your wardrobe with AI-powered styling specifically designed for UAE lifestyle and climate",
    type: "website",
    locale: "en_US",
    siteName: "GetDressed",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetDressed - AI Personal Styling for UAE",
    description: "Transform your wardrobe with AI-powered styling specifically designed for UAE lifestyle and climate",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
