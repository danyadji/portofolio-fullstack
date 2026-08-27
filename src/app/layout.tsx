import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dany Prasetyo — Fullstack Web Developer",
  description:
    "Portfolio Dany Prasetyo, Fullstack Web Developer spesialis React, Next.js, Laravel, Tailwind CSS, dan WordPress. Membangun pengalaman web yang modern, cepat, dan elegan.",
  keywords: [
    "web developer",
    "fullstack",
    "React",
    "Next.js",
    "Laravel",
    "Tailwind CSS",
    "WordPress",
    "portfolio",
  ],
  authors: [{ name: "Dany Prasetyo" }],
  openGraph: {
    title: "Dany Prasetyo — Fullstack Web Developer",
    description:
      "Portfolio Dany Prasetyo, Fullstack Web Developer spesialis React, Next.js, Laravel, Tailwind CSS, dan WordPress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
