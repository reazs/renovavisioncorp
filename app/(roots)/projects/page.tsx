"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/project";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  badges: string[];
  image: string;
}

const categories = ["All", "Interior", "Exterior"];

export default function ProjectsShowcase() {
  const [filter, setFilter] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else if (filter === "Interior") {
      setFilteredProjects(
        projects.filter((project) => project.badges.includes("Interior"))
      );
    } else if (filter === "Exterior") {
      setFilteredProjects(
        projects.filter((project) => !project.badges.includes("Interior"))
      );
    }
  }, [filter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge:any) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/projects/" + project.id} className="w-full ">
                <button className="w-full btn btn-outline">View Details</button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-lg mt-8">
          No projects found for this category.
        </p>
      )}
    </div>
  );
}
