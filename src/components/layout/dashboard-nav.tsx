"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserAvatar } from "../user-avatar"
import Logo from "../logo-svg"
import styles from "@/styles"

export default function DashboardNavbar() {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center z-40 border-b">
        <div
          className={`${styles.containerWide} container flex h-16 items-center justify-between w-full`}
        >
          <Link
            href="/"
            className="flex items-center font-display font-semibold"
          >
            <Logo />
            <p className="text-sm">Scarab</p>
          </Link>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <UserAvatar />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </>
  )
}
