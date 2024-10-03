import teamInfo from "../PhotoTeam/teamInfo.jpg";
import styles from "./ExperienceFunction.module.css";

export default function ExperienceFunction() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>
            With 15 years of industry experience and 28 employees, we will help
            you realize your dream of energy independence.
          </h3>
          <p className={styles.description}>
            We place great importance on clear and open communication, honesty,
            and transparency. Our knowledgeable team of technicians in the
            office will be happy to answer any questions you may have about
            photovoltaic systems and will receive support from our tradesmen
            (master roofers and master electricians) when required.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={teamInfo}
            alt="Team working on solar project"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
