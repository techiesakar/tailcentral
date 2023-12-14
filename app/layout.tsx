import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

import { ModalProvider } from "@/components/providers/modal-provider";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
export const dynamic = "force-dynamic";

const poppins = Nunito_Sans({
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
        <NextAuthProvider>
          {children}
          <ModalProvider />

          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
