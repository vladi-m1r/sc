import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Support",
      href: "/support",
    },
    {
      title: "Changelog",
      href: "/changelog",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      href: "/dashboard",
      icon: "boxes",
    },

    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
