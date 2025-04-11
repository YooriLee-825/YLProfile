import { useRouter } from 'next/router';
import { projects } from '../../data/projects';
import Image from 'next/image';
import Head from 'next/head';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-20">Project not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{project.title} | Yoori's Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <div className="relative w-full h-64 mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm">
          {project.content}
        </pre>
      </div>
    </>
  );
};

export default ProjectDetailPage;
