import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/Theme/ThemeProvide";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/components/Providers/StoreProvider";
import AuthProvider from "@/components/Providers/AuthProvider";
import Tawk from "@/components/Tawk";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <AuthProvider>
              {children}
              <Toaster />
             <Tawk/>
            </AuthProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
