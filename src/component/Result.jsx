import React from "react";

const Result = () => {
  return (
    <ul
      role="list"
      className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
      {projects.map((project) => (
        <li key={project.name} className="col-span-1 flex rounded-md">
          <div
            className={classNames(
              project.bgColor,
              "flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
            )}
          >
            {project.initials}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-white/10 bg-gray-800/50">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <a
                href={project.href}
                className="font-medium text-white hover:text-gray-200"
              >
                {project.name}
              </a>
              <p className="text-gray-400">{project.members} Members</p>
            </div>
            <div className="shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex size-8 items-center justify-center rounded-full text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-white"
              >
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Result;
