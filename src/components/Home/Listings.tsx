import React, { Dispatch, SetStateAction } from "react";
import Btn from "../general/btn";
import LinkComponent from "../general/link";
import { ProjectType } from "../../../types";

export default function Listings({
  item,
  projects,
  setProjects,
  setProject,
}: {
  item: ProjectType;
  projects: ProjectType[];
  setProjects: Dispatch<SetStateAction<ProjectType[]>>;
  setProject: Dispatch<SetStateAction<ProjectType>>;
}) {
  // delete Project
  const deleteProject = (item: ProjectType) => {
    localStorage.removeItem(`project${item.id}`);
    localStorage.removeItem(`project${item.id}-published`);

    const activeProjects = projects;
    const updatedProjects = activeProjects.filter((p) => p.id !== item.id);

    setProjects([...updatedProjects]);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <section className="my-5 gap-5 flex place-items-center">
      <span className="w-48">{item.title}</span>

      {/* update */}
      <Btn
        label={"Edit"}
        color={"sky"}
        handleClick={() => {
          setProject(item as ProjectType);
        }}
      />

      {/* delete */}
      <Btn
        label={"Delete"}
        color={"red"}
        handleClick={() => deleteProject(item)}
        classCSS="text-red-600 border-red-600"
      />

      {/* manage */}
      <LinkComponent
        href={`/editor?projectID=project${item.id}&projectTitle=${item.title}`}
        label="Manage"
      />

      {/* Preview */}
      <LinkComponent
        href={`/preview?projectID=project${item.id}&projectTitle=${item.title}`}
        label="Preview"
      />
    </section>
  );
}
