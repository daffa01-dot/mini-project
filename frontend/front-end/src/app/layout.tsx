import "./globals.css";

import type { Metadata } from "next";

import QueryProvider from "@/providers/query-provider"

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Teman Asuh",
  description: "Platform Donasi Shelter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <QueryProvider>

          {children}

          <ToastContainer
            position="top-right"
            autoClose={2500}
          />

        </QueryProvider>
      </body>
    </html>
  );
}