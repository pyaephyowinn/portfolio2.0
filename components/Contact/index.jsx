import styles from "./index.module.css";

const ContactSection = ({ phoneNumber, email }) => {
  return (
    <section className={styles.container} id="contact">
      <h2>Contact</h2>
      <ul className={styles["contact-infos"]}>
        <li>Phone - {phoneNumber}</li>
        <li>Email - {email}</li>
      </ul>
    </section>
  );
};
export default ContactSection;
