import React, { useState, useEffect } from "react"
import ProjectCard from "./project-card"

interface Changelog {
  id: number
  name: string
  description: string
  timestamp: string
}

const ProjectsList: React.FC = () => {
  const [changelogs, setChangelogs] = useState<Changelog[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/changelogs")
        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          )
        }
        const data: Changelog[] = await response.json()
        setChangelogs(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false) // Set loading to false once data fetching is complete
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p> // Display a loading message or spinner while fetching data
  }

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
      {changelogs.map((changelog) => (
        <div key={changelog.id} className="col-span-1">
          <ProjectCard changelog={changelog} />
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
