import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const notojp = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ulearn株式会社",
  description: "ulearn株式会社のホームページ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp" className="overflow-scroll">
      <body className={clsx(`antialiased ${notojp.className} w-full h-full`)}>
        {children}
      </body>
    </html>
  );
}
