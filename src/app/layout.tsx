import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sai Manoj Varikuntla",
  description: "AI Developer, Full Stack Engineer, and ML Enthusiast. Passionate about building intelligent systems and creating exceptional user experiences.",
  keywords: ["AI Developer", "Full Stack Engineer", "Machine Learning", "React", "Next.js", "Python", "Portfolio"],
  authors: [{ name: "Sai Manoj Varikuntla" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Sai Manoj Varikuntla | AI Developer & Full Stack Engineer",
    description: "AI Developer, Full Stack Engineer, and ML Enthusiast. Passionate about building intelligent systems and creating exceptional user experiences.",
    siteName: "Sai Manoj Varikuntla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Manoj Varikuntla | AI Developer & Full Stack Engineer",
    description: "AI Developer, Full Stack Engineer, and ML Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
