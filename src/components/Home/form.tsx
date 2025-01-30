"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { ProjectType } from "../../../types";

export default function Form({
  project,
  setProject,
  projects,
  setProjects,
}: {
  project: ProjectType;
  projects: ProjectType[];
  setProjects: Dispatch<SetStateAction<ProjectType[]>>;
  setProject: Dispatch<SetStateAction<ProjectType>>;
}) {
  const [title, setTitle] = useState(project?.title);

  // submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const activeProjects = projects;

    // update
    if (project.id > 0) {
      const activeProject = project;
      activeProject.title = title;

      const activeProjects = projects;
      const updatedProjects = activeProjects.map((project) =>
        project.id === activeProject.id ? activeProject : project
      );

      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));

      // create
    } else {
      activeProjects.push({
        id: projects.length + 1,
        title: title as string,
      });

      setProjects(activeProjects);
      localStorage.setItem("projects", JSON.stringify(activeProjects));
    }

    // return to default state
    setProject({ id: 0, title: "" });
  };

  return (
    <form className="my-10" onSubmit={(e) => handleSubmit(e)}>
      {project.id <= 0 && (
        <legend className="text-2xl font-bold my-5">Create Project</legend>
      )}

      <label className="">Title:</label>
      <input
        type="text"
        name="name"
        placeholder="Project Title"
        className="p-2 w-80 rounded mx-5 text-black"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit" className="bg-sky-800 py-2 px-5 rounded">
        Submit
      </button>
    </form>
  );
}
