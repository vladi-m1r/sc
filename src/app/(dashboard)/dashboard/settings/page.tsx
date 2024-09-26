"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function IndexPage() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(currentTheme)
  const { toast } = useToast()

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme)
  }

  const handleUpdateTheme = () => {
    setTheme(selectedTheme || "defaultTheme")
  }

  return (
    <>
      <div className="">
        <h1 className="text-[18px] font-medium">Settings</h1>
        <p className="text-sm">Manage account and website settings.</p>
        <Separator className="my-4 w-[800px]" />
        <h1>Theme</h1>
        <p className="text-[13px]">Select the theme for the dashboard.</p>

        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              value="light"
              checked={selectedTheme === "light"}
              onChange={() => handleThemeChange("light")}
              className="mr-2 appearance-none"
            />
            <div
              className={`items-center rounded-md  p-1 hover:bg-accent hover:text-accent-foreground ${
                selectedTheme === "light" ? "border-1 border-foreground" : ""
              }`}
            >
              <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                  <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal text-sm">
              Light
            </span>
          </label>
          <label>
            <input
              type="radio"
              value="dark"
              checked={selectedTheme === "dark"}
              onChange={() => handleThemeChange("dark")}
              className="mr-2 appearance-none"
            />
            <div
              className={`items-center rounded-md p-1 hover:bg-accent hover:text-accent-foreground ${
                selectedTheme === "dark" ? "border-1 border-foreground" : ""
              }`}
            >
              <div className="space-y-2 rounded-sm bg-black p-2">
                <div className="space-y-2 rounded-md bg-neutral-900 p-2 shadow-sm">
                  <div className="h-2 w-[80px] rounded-lg bg-neutral-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-neutral-600" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-neutral-900  p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-neutral-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-neutral-600" />
                </div>
                <div className="flex items-center space-x-2 rounded-md bg-neutral-900  p-2 shadow-sm">
                  <div className="h-4 w-4 rounded-full bg-neutral-600" />
                  <div className="h-2 w-[100px] rounded-lg bg-neutral-600" />
                </div>
              </div>
            </div>
            <span className="block w-full p-2 text-center font-normal text-sm">
              Dark
            </span>
          </label>
        </div>
        <Button
          className="my-5"
          onClick={() => {
            handleUpdateTheme()
            toast({
              title: "Preferences Updated!",
              description: "Theme Change",
            })
          }}
        >
          Update Preferences
        </Button>
      </div>
    </>
  )
}
