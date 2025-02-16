import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import LeftNavigationBar from "@/components/common/LeftNavigationBar";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700"],
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable} antialiased font-nanum`}>
        <div className="flex h-screen">
          <LeftNavigationBar />
          <div className="flex-1 h-screen shadow-lg rounded-xl p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
