import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import Logo from "./logo-svg"

const ImportComponent: React.FC = () => {
  const [name, setProjectName] = useState("")
  const [description, setDescription] = useState("")

  const handleImport = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission

    try {
      const response = await fetch("/api/changelogs", {
        // Updated endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          // Include other necessary fields for the post
        }),
      })

     if (!response.ok) {
       const errorMessage = await response.text() // Get the specific error message
       throw new Error(`Failed to create project: ${errorMessage}`) // Update error message with specific response error
     }

      // Reset form fields after successful creation
      setProjectName("")
      setDescription("")
    } catch (error) {
      console.error(error)
      // Handle error state or display error message
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create project</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <div className="flex justify-center mt-10 mb-4">
              <Logo width="50px" height="50px" />
            </div>
            <DialogTitle>Create a new project</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form onSubmit={handleImport}>
            {/* Use onSubmit for form submission */}
            <div className="grid gap-4 py-4 mx-14">
              <div className="items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Project Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="mx-14 mb-10">
              <Button type="submit" className="w-[320px]">
                Create project
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ImportComponent
