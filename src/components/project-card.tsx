import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatTimeAgo } from "@/lib/dates"

interface Changelog {
  id: number
  name: string
  description: string
  timestamp: string
}

interface ProjectCardProps {
  changelog: Changelog
}

const ProjectCard: React.FC<ProjectCardProps> = ({ changelog }) => {
  const timeAgo = formatTimeAgo(changelog.timestamp)
  return (
    <div className="project-card">
      <Card>
        <CardHeader>
          <CardTitle>{changelog.name}</CardTitle>
          <CardDescription>{changelog.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
        </CardContent>
        <CardFooter>
          <p>{timeAgo}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard
