import React from "react";
import "./index.scss";

function Project(props) {
  const { project } = props;
  return (
    <div className="project-container">
      <h1>{project["name"]}</h1>
      <h6>{project["body"]}</h6>
    </div>
  );
}

function UserProjectsComponent(props) {
  const { projects } = props;
  if (!projects) {
    return null;
  }

  return (
    <div className="grid-projects-container">
      {projects.map((p) => {
        return <Project project={p} key={`project_${p["id"]}`} />;
      })}
    </div>
  );
}

const UserProjects = React.memo(
  UserProjectsComponent,
  (prevProps, nextProps) => {
    if (prevProps.projects === nextProps.projects) {
      // don't re-render/update
      return true;
    }
  }
);

export default UserProjects;
