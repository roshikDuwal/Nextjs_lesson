import type { Metadata } from "next";
import "../styles/globals.css";
import { Roboto, Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Next.js App",
    template: "%s | Next.js App",
  },
  description: "Free Learning Next.js with Thapa Technical",
  keywords: ["nextjs", "react", "javascript", "web development"],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
  },
  metadataBase: new URL("https://thapatechnical.com"),
  openGraph: {
    title: {
      default: "Next.js App",
      template: "%s | Next.js App",
    },
    description: "Free Learning Next.js with Thapa Technical",
    url: "https://thapatechnical.com",
    siteName: "Thapa Technical",
    images: [
      { url: "/og-image.png", 
        type: "image/png", 
        width: 1200, height: 630 
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Next.js App",
      template: "%s | Next.js App",
    },
    description: "Free Learning Next.js with Thapa Technical",
    images: [
      { url: "/twitter-image.png", 
        alt: "Next.js App Twitter Image"
      },
    ],
    creator: "@thapatechnical",
  }
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}
