import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image"

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
      <Image
          src="/Anup.jpeg"
          width={50}
          height={50}
          className="mx-auto rounded-full"
          alt={"logo"}
        />
        <Link href="/"><h1 className="text-2xl text-white font-bold mt-4">StudyDevOps</h1> </Link>
        <p className="text-slate-300">DevOps blog</p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-slate-400 flex flex-col md:flex-row justify-between items-center">
        <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; 2024 StudyDevOps. All Rights Reserved.</p>
        <div className="flex space-x-4 order-1 md:order-2 mt-4 md:mt-0">
          <Link href="https://x.com/anupdevops" target="_blank">
            <Image
              src="/x-icon.png"
              width={30}
              height={30}
              className="rounded-full"
              alt="Twitter"
            />
          </Link>
          <Link href="https://linkedin.com/in/anupdevops" target="_blank">
            <Image
              src="/linkedin-icon.png"
              width={30}
              height={30}
              className="rounded-full"
              alt="LinkedIn"
            />
          </Link>
          <Link href="https://github.com/AnupDevOps" target="_blank">
            <Image
              src="/github-icon.png"
              width={30}
              height={30}
              className="rounded-full"
              alt="Github"
            />
          </Link>
        </div>
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
