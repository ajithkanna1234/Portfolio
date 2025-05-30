import { Geist, Geist_Mono, Koulen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Title = Koulen({
  variable: "--font-koulen",
  weight: '400', // Koulen only has one weight (400)
  subsets: ['latin', 'khmer'], // 'khmer' is important for Koulen
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Title.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
