import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/navigation/header/header";
import "./globals.css";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import { ModalProvider } from "@/components/providers/modal-provider";
export const dynamic = "force-dynamic";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={poppins.className}>
        <Sidebar className="w-[260px]" />
        <div className="flex flex-col justify-between ml-[260px] max-h-screen h-full overflow-hidden">
          <Header />
          <main className="flex-1 p-6 border border-gray-300 bl-0 ">
            {children}
          </main>
        </div>
        <ModalProvider />

        <Toaster />
      </body>
    </html>
  );
}
