import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import ToastProvider from '@/providers/toast-providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          <ToastProvider />
        </QueryProvider>
      </body>
    </html>
  );
}