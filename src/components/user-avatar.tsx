import { useEffect, useState } from "react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface User {
  given_name: string
  family_name: string
  email: string
}

export function UserAvatar() {
  const [user, setUser] = useState<User | null>(null)
  const [authStatus, setAuthStatus] = useState<boolean | null>(null)

  useEffect(() => {
    const getKindeSession = async () => {
      try {
        const res = await fetch("/api/kindeSession")

        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
          setAuthStatus(data.authenticated)
          console.log("User Data:", data.user)
        } else {
          console.error("API request failed:", res.status, res.statusText)
        }
      } catch (error) {
        console.error("Error fetching Kinde session:", error)
      }
    }

    getKindeSession()
  }, [])

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback>
              {user?.given_name?.[0]}
              {user?.family_name?.[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {user?.given_name} {user?.family_name} <br />
            <span className="w-[200px] truncate text-[13px] text-muted-foreground">
              {user?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/billing">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/api/auth/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Add your profile picture upload logic here */}
    </div>
  )
}
