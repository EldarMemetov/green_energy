import Customer from "../OurValuesImage/Customer.png";
import Environment from "../OurValuesImage/Environment.png";
import Price from "../OurValuesImage/Price.png";
import styles from ".//OurValuesFunction.module.css"; // Стили

export default function OurValuesFunction() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.valuesTitle}>Our Values</h2>
        <p className={styles.valuesIntro}>
          More than 3000 users have been helped by World Online Course.
        </p>
        <ul className={styles.valuesList}>
          <li className={styles.valuesItem}>
            <img
              src={Price}
              alt="Customer Care"
              className={styles.valuesImage}
            />
            <h3 className={styles.valuesSubtitle}>Customer Care</h3>
            <p className={styles.valuesDescription}>
              We are here to help you with solar panel installation in Devon and
              Cornwall. We pride ourselves on being honest and transparent from
              the start of the project to the finish.
            </p>
          </li>
          <li className={styles.valuesItem}>
            <img src={Customer} alt="Price" className={styles.valuesImage} />
            <h3 className={styles.valuesSubtitle}>Price</h3>
            <p className={styles.valuesDescription}>
              Our goal is to make solar power accessible to everyone. We price
              ourselves to make solar energy affordable, focusing on helping you
              and the environment.
            </p>
          </li>
          <li className={styles.valuesItem}>
            <img
              src={Environment}
              alt="Sustainability"
              className={styles.valuesImage}
            />
            <h3 className={styles.valuesSubtitle}>Sustainability</h3>
            <p className={styles.valuesDescription}>
              We care about the planet and aim to educate people on how to
              embrace a greener, more eco-friendly approach to power.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
