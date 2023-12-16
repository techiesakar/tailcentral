import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

import { ModalProvider } from "@/components/providers/modal-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import MenuContextProvider from "@/components/providers/menu-context";
// export const dynamic = "force-dynamic";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider session={session}>
          <MenuContextProvider>
            {children}
            <ModalProvider />
            <Toaster />
          </MenuContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
