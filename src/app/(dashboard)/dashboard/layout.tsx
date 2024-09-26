import { dashboardConfig } from "@/config/dashboard"
import { DashboardNav } from "@/components/layout/nav"
import DashboardNavbar from "@/components/layout/dashboard-nav"
import { Toaster } from "@/components/ui/toaster"

import styles from "@/styles"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-24">
      <header>
        <DashboardNavbar />
      </header>
      <div
        className={`${styles.containerWide} container grid flex-1 gap-12 md:grid-cols-[200px_1fr]`}
      >
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
        <Toaster />
      </div>
    </div>
  )
}
