import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/navigation/header/header";
import { Footer } from "@/components/navigation/footer/footer";
import "./globals.css";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailcentral",
  description: "Free Tailwind Components Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar className="w-[250px]" />
        <div className="flex flex-col justify-between ml-[274px] max-h-screen h-full">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
