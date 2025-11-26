import "@/styles/globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className="dark">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="relative flex flex-col h-screen">
          <NextIntlClientProvider>
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <p>Daniel Bos 2025</p>
              </footer>
            </Providers>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
