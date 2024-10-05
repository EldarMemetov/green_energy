import styles from "./Contact.module.css";
import ContactForm from "../ContactForm/ContactForm";
import panelPhoto from "../PhotoPanel/panelPhoto.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className={styles.contactSection}
      style={{ backgroundImage: `url(${panelPhoto})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Empower a Greener Future with Us</h1>
        <p className={styles.motivationalText}>
          Reach out to us today to discover how we can power your home or
          business with cutting-edge, sustainable energy solutions. We’re here
          to help you make the world a cleaner, brighter place.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Address</h3>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Solar+St,+Green+City,+Earth"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                123 Solar St, Green City, Earth
              </a>
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>
              <a href="mailto:contact@greenenergy.com" className={styles.link}>
                contact@greenenergy.com
              </a>
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Phone</h3>
            <p>
              <a href="tel:+1234567890" className={styles.link}>
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
