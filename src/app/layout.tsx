import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/header";
import "./globals.css"
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provide";
import LayoutWrapper from "@/components/layout-wrapper";

import "./globals.css";

// Configure font
const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UI Lab",
    template: "%s | UI Lab",
  },
  description: "Frontend experiments and showcases",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className="bg-[#f6f3ee] bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.12),transparent_80%)]">

      {/* Apply font globally */}
      <body className={`${geist.className} bg-[#0f0f10]`}>
        
        <SmoothScrollProvider>

        {/* Persistent layout UI */}
       <LayoutWrapper>
         <main>{children}</main>
       </LayoutWrapper>

        </SmoothScrollProvider>

      </body>
    </html>
  );
}