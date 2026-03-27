import { notFound } from 'next/navigation';
import { getPosts } from '@/app/utils/utils';
import { baseURL, person, about } from '@/resources';
import { Schema, Meta } from '@once-ui-system/core';
import ProjectDetailClient from './ProjectDetailClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getPosts(['src', 'app', 'work', 'projects']);
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPosts(['src', 'app', 'work', 'projects']).find((p) => p.slug === slug);

  if (!project) {
    return;
  }

  const { title, summary, image } = project.metadata;

  return Meta.generate({
    title: `${title}`,
    description: summary,
    baseURL: baseURL,
    image: image || `/api/og/generate?title=${encodeURIComponent(title)}`,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPosts(['src', 'app', 'work', 'projects']).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/work/${slug}`}
        title={project.metadata.title}
        description={project.metadata.summary}
        image={project.metadata.image || `/api/og/generate?title=${encodeURIComponent(project.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ProjectDetailClient 
        project={project}
        aboutPath={about.path}
        personName={person.name}
        personAvatar={person.avatar}
      />
    </>
  );
}
