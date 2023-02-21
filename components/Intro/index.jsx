import Link from "next/link";
import styles from "./index.module.css";
import IconGithub from "../icons/IconGithub";
import IconLinkedin from "../icons/IconLinkedin";

const IntroSection = ({ resumeLink, ghProfileLink, linkedinProfileLink }) => {
  return (
    <section className={styles.container}>
      <h1>
        Hi, I am <span className={styles.name}>Pyae Phyo Win.</span>
      </h1>
      <div className={styles.position}>A Front End Developer.</div>
      <p className={styles.desc}>
        I am a passionate about software development and exploring new
        technologies. I am skilled in MERN Stack and working as a junior
        frontend developer.
      </p>
      <div className={styles.links}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={resumeLink}
          className={styles.button}
        >
          resume
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={ghProfileLink}>
          <IconGithub />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={linkedinProfileLink}
        >
          <IconLinkedin />
        </Link>
      </div>
    </section>
  );
};
export default IntroSection;
