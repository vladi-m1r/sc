import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { marketingConfig } from "@/config/marketing"
import { NavBar } from "@/components/layout/site-nav"
import { SiteFooter } from "@/components/layout/site-footer"

const inter = Inter({ subsets: ["latin"] })

interface MarketingLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Scarab",
  description:
    "Scarab is an open source web application designed for efficient release management, integrating with GitHub to automatically retrieve and process release data.",
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="containerNarrow">
          <NavBar items={marketingConfig.mainNav} />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
