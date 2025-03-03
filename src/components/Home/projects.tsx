"use client";
import React, { Dispatch, SetStateAction } from "react";
import { ProjectType } from "../../../types";
import Form from "./form";
import Listings from "./Listings";

export default function Projects({
  projects,
  setProjects,
  project,
  setProject,
}: {
  projects: ProjectType[];
  setProjects: Dispatch<SetStateAction<ProjectType[]>>;
  project: ProjectType;
  setProject: Dispatch<SetStateAction<ProjectType>>;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects Listing</h2>

      {projects.length > 0 &&
        projects &&
        projects.map((item) => (
          <section key={item.title}>
            <Listings
              key={item.title}
              item={item}
              projects={projects}
              setProjects={setProjects}
              setProject={setProject}
            />

            {/* update form */}
            {project.id > 0 && project.id === item.id ? (
              <Form
                projects={projects}
                setProjects={setProjects}
                project={project}
                setProject={setProject}
              />
            ) : (
              ""
            )}
          </section>
        ))}
    </div>
  );
}
