"use client";
import React, { Dispatch, SetStateAction } from "react";
import { ProjectType } from "../../../types";
import Btn from "../general/btn";
import Form from "./form";
import LinkComponent from "../general/link";

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
        projects.map((item, index) => (
          <>
            <section key={index} className="my-5 gap-5 flex place-items-center">
              <span className="w-48">{item.title}</span>

              <Btn
                label={"Edit"}
                color={"sky"}
                handleClick={() => {
                  setProject(item as ProjectType);
                }}
              />
              
              <Btn
                label={"Del"}
                color={"red"}
                handleClick={() => {
                  const activeProjects = projects;
                  const updatedProjects = activeProjects.filter(
                    (p) => p.id !== item.id
                  );
                  
                  setProjects([...updatedProjects]);
                  localStorage.setItem(
                    "projects",
                    JSON.stringify(updatedProjects)
                  );
                }}
              />

              <LinkComponent href={`/editor?projectID=project${item.id}`} label="Manage" />
              <LinkComponent href={`/preview?projectID=project${item.id}`} label="Preview" />
            </section>

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
          </>
        ))}
    </div>
  );
}
