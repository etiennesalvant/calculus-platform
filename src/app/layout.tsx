import { StorageNotice } from "@/components/layout/StorageNotice";
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { NavigationSidebar } from "@/components/layout/NavigationSidebar";

export const metadata: Metadata = {
  title: "Calculus Platform",
  description: "A self-paced mathematics workbench by Etienne Salvant.",
  authors: [{ name: "Etienne Salvant" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen"><a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <div className="flex flex-col md:flex-row min-h-screen">
          <NavigationSidebar />
          <main id="main-content" className="flex-1 min-w-0"><StorageNotice />{children}<footer className="mx-6 py-6 border-t border-slate-200 text-xs text-slate-500">Calculus Platform · Etienne Salvant · Progress stays in this browser.</footer></main>
        </div>
      </body>
    </html>
  );
}
