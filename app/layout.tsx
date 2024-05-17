import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({ subsets: ["latin", "cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Capeum",
  description: "Keep track of your finances with Capeum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            <QueryProvider>
              {children}
            </QueryProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
