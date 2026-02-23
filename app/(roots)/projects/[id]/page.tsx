import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import projects from "@/data/project";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/projects"
        className="inline-flex items-center mb-4 hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={600}
        className="w-full object-cover h-[600px] rounded-md"
      />
      <CardHeader>
        <CardTitle className="text-3xl">{project.title}</CardTitle>
        <CardDescription className="text-lg">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.badges.map((badge:any) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Details</h2>
          <p>
            {project.details ? (
              project.details
            ) : (
              <>
                This section would contain more detailed information about the
                project, such as the challenges faced, the solutions
                implemented, and the overall impact of the work. You can
                expand this with real project data.
              </>
            )}
          </p>
          <h3 className="text-xl font-semibold">Key Features</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature:any) => (
              <li>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">Client Testimonial</h3>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            {project.testimonial}
          </blockquote>
        </div>
      </CardContent>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
