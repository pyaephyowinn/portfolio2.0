import Link from "next/link";
import styles from "./index.module.css";
import IconGithub from "../icons/IconGithub";
import IconLinkedin from "../icons/IconLinkedin";

const IntroSection = ({ ghProfileLink, linkedinProfileLink }) => {
  return (
    <section className={styles.container}>
      <h1>
        Hi, I am <span className={styles.name}>Pyae Phyo Win.</span>
      </h1>
      <div className={styles.position}>A Front End Developer.</div>
      <p className={styles.desc}>
        I am a passionate developer who loves tech and exploring about new
        technologies. I am skilled in MERN stack and currently working as a
        junior frontend developer.
      </p>
      <div className={styles.links}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={ghProfileLink}
          className={styles.button}
        >
          resume
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={linkedinProfileLink}
        >
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
