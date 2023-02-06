import Link from "next/link";
import styles from "./index.module.css";
import IconGithub from "../icons/IconGithub";
import IconExternalLink from "../icons/IconExternalLink";

const ProjectsSection = ({ projects = [] }) => {
  if (projects.length === 0) {
    return null;
  }
  console.log("projects", projects);
  return (
    <section className={styles.container} id="projects">
      <h2>Projects</h2>
      <div className={styles.projects}>
        {Object.keys(projects).map((key) => (
          // console.log('project inside', projects[key])
          <div className={styles.project} key={key}>
            <h4>{projects[key].name}</h4>
            <p>{projects[key].desc}</p>
            <ul className={styles.techs}>
              {projects[key].techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <Link href={projects[key].sourceUrl} target="_blank">
                <IconGithub />
              </Link>
              <Link href={projects[key].demoUrl} target="_blank">
                <IconExternalLink />
              </Link>
            </div>
          </div>
        ))}
        {/* {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <h4>{project.name}</h4>
            <p>{project.desc}</p>
            <ul className={styles.techs}>
              {project.techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <Link href={project.sourceUrl} target="_blank">
                <IconGithub />
              </Link>
              <Link href={project.demoUrl} target="_blank">
                <IconExternalLink />
              </Link>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};
export default ProjectsSection;
