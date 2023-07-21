import HeadNavBar from "@/components/HeadNavBar";
import SideNavBar from "@/components/SideNavBar";
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
