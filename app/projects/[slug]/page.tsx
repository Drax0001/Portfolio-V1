import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import { ProjectType } from "@/type";
import ProjectDetail from "@/app/components/ProjectDetail";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Berthold's Corner`,
    description: project.description,
  };
}

// Get project data by slug
function getProjectBySlug(slug: string): ProjectType | null {
  return projects.find((project) => project.slug === slug) || null;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  // Handle 404 for invalid project slugs
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
