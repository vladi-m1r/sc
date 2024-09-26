import { PrismaClient } from "@prisma/client"
import { timeStamp } from "console"
// ... other imports

const prisma = new PrismaClient()

// ... existing code

export async function GET() {
  try {
    // Use Prisma client to fetch Changelog data
    const changelogs = await prisma.changelog.findMany({
      // Add any necessary query options here
    })

    return new Response(JSON.stringify(changelogs))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // ... existing code
    const { name, description } = await req.json()

    const newChangelog = await prisma.changelog.create({
      data: {
        name,
        description,
        // Add other fields based on your schema
      },
    })

    return new Response(JSON.stringify(newChangelog))
  } catch (error) {
    console.error("Error creating new changelog:", error)
    return new Response(
      JSON.stringify({ error: "Failed to create a new changelog" }),
      { status: 500 }
    )
  }
}