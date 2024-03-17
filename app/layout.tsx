import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";
import Header from "@/components/header";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@/components/speed-insights";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzifyme",
  description: "Generated quiz for you",
};



export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
          enableSystem
          disableTransitionOnChange
         >
          <div className="flex flex-auto flex-col h-screen justify-end items-end">
            <Header />
            <div className="h-full mt-12">{children}</div>
          </div>

          </ThemeProvider>
          {/* <Analytics />
          <SpeedInsights /> */}
        </body>
    </html>
  );
}
