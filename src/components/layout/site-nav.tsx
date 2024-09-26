"use client"

import Link from "next/link"

import { MainNavItem } from "@/types"
import { cn } from "@/lib/utils"
import useScroll from "@/lib/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import Logo from "../logo-svg"
import React from "react"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function NavBar({ items, children }: MainNavProps) {
  const scrolled = useScroll(50)

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled ? "border-b bg-background backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="container flex h-16 items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center font-display"
          >
            <Logo />
            <p className="text-base">Scarab</p>
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-md transition-colors hover:text-foreground/80 sm:text-sm"
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          <Button asChild variant="secondary">
            <a href="api/auth/login">Login</a>
          </Button>
        </div>
      </div>
    </>
  )
}
