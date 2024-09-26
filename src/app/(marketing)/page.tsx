import Link from "next/link"
import Balancer from "react-wrap-balancer"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <main className="container p-0 pt-[100px] md:pt-[170px]">
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-stone-300 px-7 py-2"
      >
        <p className="text-sm font-semibold">Building</p>
      </a>
      <h2 className="lg:text-6xl text-4xl tracking-tighter text-center dark:text-amber-100">
        Scarab
      </h2>
      <p className="text-sm text-center p-3">
        <Balancer>
          {" "}
          A comprehensive open-source changelog management tool for software
          development teams. Effortlessly track detailed technical changes.
        </Balancer>
      </p>
      <h2 className="lg:text-2xl text-xl tracking-tighter text-center my-5 mt-20">
        Built with
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 mb-20">
        <Card>
          <CardHeader>
            <CardTitle>Nextjs/TypeScript</CardTitle>
            <CardDescription>
              Robust web development with efficient typing and static analysis
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shadcn/TailwindCSS</CardTitle>
            <CardDescription>
              Beautifully designed components + CSS Framework
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prisma/PlanetScale</CardTitle>
            <CardDescription>
              Seamless data management and scaling
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>MDX</CardTitle>
            <CardDescription>
              Markdown with interactive and dynamic components
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  )
}
