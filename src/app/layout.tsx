import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/src/app/_lib/utils/core";
import {CustomNavbar} from "@/ui/CustomNavbar";
import {CustomFooter} from "@/ui/CustomFooter";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen flex flex-col',inter.className)}>

        <div className="container mx-auto flex-1 pt-20 pb-6">
          {children}
        </div>

      </body>
    </html>
  );
}
