import styles from "./index.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMaterialui,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
} from "react-icons/si";

const index = () => {
  return (
    <section className={styles.container} id="skills">
      <h2>Skills</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <SiHtml5 size={40} color="#e34c26" />
          <div>Html</div>
        </div>

        <div className={styles.skill}>
          <SiCss3 size={40} color="#264de4" />
          <div>Css</div>
        </div>

        <div className={styles.skill}>
          <SiJavascript size={40} color="#f0db4f" />
          <div>JavaScript</div>
        </div>

        <div className={styles.skill}>
          <SiReact size={40} color="#61dbfb" />
          <div>React</div>
        </div>

        <div className={styles.skill}>
          <SiRedux size={40} color="#764abc" />
          <div>Redux</div>
        </div>

        <div className={styles.skill}>
          <SiTypescript size={40} color="#007acc" />
          <div>TypeScript</div>
        </div>

        <div className={styles.skill}>
          <SiMaterialui size={40} color="#00b0ff" />
          <div>MUI</div>
        </div>

        <div className={styles.skill}>
          <SiNextdotjs size={40} color="#a8b9c0" />
          <div>Next.js</div>
        </div>

        <div className={styles.skill}>
          <SiTailwindcss size={40} color="#38b2ac" />
          <div>Tailwind</div>
        </div>

        <div className={styles.skill}>
          <SiGit size={40} color="#F05033" />
          <div>Git</div>
        </div>

        <div className={styles.skill}>
          <SiNodedotjs size={40} color="#68a063" />
          <div>Node.js</div>
        </div>

        <div className={styles.skill}>
          <SiExpress size={40} color="#6CC4EE" />
          <div>Express</div>
        </div>

        <div className={styles.skill}>
          <SiMongodb size={40} color="#47a248" />
          <div>Mongo</div>
        </div>
      </div>
    </section>
  );
};
export default index;
