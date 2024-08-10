import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyDevOps",
  description: "Blog all about DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/"><h1 className="text-2xl text-white font-bold mt-4">Study DevOps Blog</h1> </Link>
        <p className="text-slate-300">Welcome to StudyDevOps blog</p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <p> Developed by Anup Copyright@2024</p>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          <SpeedInsights />
          {footer}
        </div>
      </body>
    </html>
  );
}
