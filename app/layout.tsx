import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " jpstock-trade-next-pc-front",
  description: " jpstock-trade-next-pc-front",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
