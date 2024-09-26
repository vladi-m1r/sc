"use client"

import ImportComponent from "@/components/import-component"
import ProjectsList from "@/components/project-list"

const IndexPage = () => {
  return (
    <div className="App">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[18px] font-semibold">Projects</h1>
          <p className="text-sm">Manage all project changelogs.</p>
        </div>
        <div>
          <ImportComponent />
        </div>
      </div>
      <div className="my-4">
        <ProjectsList />
      </div>
    </div>
  )
}

export default IndexPage
