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
  title: "Joshua Nathaniel Manuputty - Frontend Engineer",
  description: "Frontend engineer specializing in AI, Web3, and modern web development. Building beautiful, interactive web experiences.",
  keywords: ["frontend engineer", "web developer", "AI", "Web3", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Joshua Nathaniel Manuputty" }],
  openGraph: {
    title: "Joshua Nathaniel Manuputty - Frontend Engineer",
    description: "Frontend engineer specializing in AI, Web3, and modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Nathaniel Manuputty - Frontend Engineer",
    description: "Frontend engineer specializing in AI, Web3, and modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
