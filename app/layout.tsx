import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudySync — AI-Powered Student Productivity",
  description:
    "StudySync helps students plan smarter, organize their studies, track progress and build better study habits with AI.",
  keywords: [
    "student productivity",
    "AI study planner",
    "exam preparation",
    "spaced repetition",
    "student planner",
    "homework tracker",
    "focus timer",
    "quiz generator",
  ],
  authors: [{ name: "StudySync Team" }],
  creator: "StudySync",
  openGraph: {
    title: "StudySync — AI-Powered Student Productivity",
    description:
      "Study Smarter. Achieve More. The intelligent productivity suite built specifically for university and high school students.",
    url: "https://studysync.app",
    siteName: "StudySync",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudySync — AI-Powered Student Productivity",
    description:
      "Study Smarter. Achieve More. Plan schedules, organize notes, and track study habits with AI.",
    creator: "@studysync",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#635BFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#635BFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
