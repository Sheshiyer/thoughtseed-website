import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import localFont from 'next/font/local';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { PageWrapper } from "../components/layout/page-wrapper";
import "./globals.css";

const subjectivity = localFont({
  src: [
    {
      path: '../fonts/SubjectivitySerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SubjectivitySerif-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SubjectivitySerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-subjectivity',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Thoughtseed | Modern Digital Agency",
  description: "Transforming ideas into digital reality with innovative solutions and cutting-edge technology.",
  keywords: ["digital agency", "web development", "design", "innovation", "technology"],
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" }
    ],
    other: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/favicon/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${roboto.variable} ${openSans.variable} ${subjectivity.variable} font-sans antialiased bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageWrapper>
            {children}
          </PageWrapper>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
