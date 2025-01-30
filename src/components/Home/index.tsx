"use client";

import React, { useState } from "react";
import Form from "./form";
import Projects from "./projects";
import { ProjectType } from "../../../types";

export default function HomeComponent() {
  const [projects, setProjects] = useState<ProjectType[]>(
    JSON.parse(localStorage.getItem("projects") as string) || []
  );
  const [project, setProject] = useState<ProjectType>({ id: 0, title: "" });

  return (
    <main>
      {project?.id <= 0 ? (
        <Form
          projects={projects}
          setProjects={setProjects}
          project={project}
          setProject={setProject}
        />
      ) : (
        ""
      )}

      <Projects
        projects={projects}
        setProjects={setProjects}
        project={project}
        setProject={setProject}
      />
    </main>
  );
}
