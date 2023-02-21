import { useContext, useEffect } from "react";

import Head from "next/head";
import ContactSection from "../components/Contact";
import Header from "../components/Header";
import IntroSection from "../components/Intro";
import ProjectsSection from "../components/Projects";
import Skills from "../components/Skills";
import ThemeContext from "../context/themeContext";
import styles from "../styles/Home.module.css";

const Home = ({
  projects,
  phoneNumber,
  email,
  resumeLink,
  ghProfileLink,
  linkedinProfileLink,
}) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (theme.state.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme.state.darkMode]);
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Pyae Phyo Win</title>
        <meta name="description" content="Pyae Phyo Win's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <IntroSection
          resumeLink={resumeLink}
          ghProfileLink={ghProfileLink}
          linkedinProfileLink={linkedinProfileLink}
        />
        {/* <ProjectsSection projects={projects} /> */}
        {/* <Skills /> */}
        <ContactSection phoneNumber={phoneNumber} email={email} />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/projects.json`);
  const projects = await res.json();

  return {
    props: {
      projects,
      phoneNumber: process.env.PHONE_NUMBER,
      email: process.env.EMAIL,
      resumeLink: process.env.RESUME_LINK,
      ghProfileLink: process.env.GITHUB_PROFILE_LINK,
      linkedinProfileLink: process.env.LINKEDIN_PROFILE_LINK,
    },
  };
}
