"use client";

import React, { Dispatch, SetStateAction } from "react";
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const activeProjects = projects;

    // update
    if (project.id > 0) {
      const activeProject = project;
      activeProject.title = data.name as string;

      const activeProjects = projects;
      const updatedProjects = activeProjects.map((p) =>
        p.id === activeProject.id ? activeProject : p
      );

      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));

      // create
    } else {
      activeProjects.push({
        id: projects.length + 1,
        title: data.name as string,
      });

      setProjects(activeProjects);
      localStorage.setItem("projects", JSON.stringify(activeProjects));
    }

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
      />

      <button type="submit" className="bg-sky-800 py-2 px-5 rounded">
        Submit
      </button>
    </form>
  );
}
