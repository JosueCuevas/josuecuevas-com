interface Props {
  project: {
    image: string;
    title: string;
    dateProject: string;
    description: string;
    urlProject: string;
    techUsed: string[];
  };
  text_1: string;
}

const TimeLine: React.FC<Props> = ({ project, text_1 }) => {
  return (
    <div className="relative pl-8 pb-10">
      {/* Line */}
      <div className="absolute left-2 top-2 h-full w-px bg-neutral-300" />

      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary-color" />

      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <span className="text-sm text-neutral-500">{project.dateProject}</span>

        <h4 className="text-lg font-semibold mt-1">{project.title}</h4>

        <p className="mt-3 text-neutral-600 whitespace-pre-line">
          {project.description}
        </p>

        {/* Tech */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {project.techUsed.map((tech) => (
            <li
              key={tech}
              className="text-xs font-medium bg-app-soft/60 px-3 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.urlProject}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent-color hover:underline"
        >
          {text_1}→
        </a>
      </div>
    </div>
  );
};

export default TimeLine;
