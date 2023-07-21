import HeadNavBar from "@/components/HeadNavBar";
import SideNavBar from "@/components/SideNavBar";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notosanjp = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="ja" className={notosanjp.className}>
      <body className="flex w-screen bg-gray-100">
        <SideNavBar />
        <div className="w-full">
          <HeadNavBar />
          {/* Main */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
