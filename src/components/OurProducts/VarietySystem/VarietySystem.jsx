import { useState } from "react";
import solarSystem from "../Image/solarSystemVarietyariety.jpg";
import styles from "./VarietySystem.module.css";

export default function VarietySystem() {
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const content = {
    glassFilm: (
      <p>
        Glass film modules are a combination of glass and thin polyethylene
        film. The glass serves as the outer protective layer and provides not
        only high strength but also resistance to weather conditions. The
        plastic film protects the solar elements and cables located underneath.
        This ensures an optimal temperature balance and, therefore, the
        efficiency of the photovoltaic module with reduced weight.
      </p>
    ),
    glassGlass: (
      <p>
        In glass-glass modules, the lower film is replaced with a second glass
        layer. As a result, it provides a particularly reliable photovoltaic
        module, often rewarded with a longer warranty from the manufacturer. An
        additional advantage is the higher yield due to the use of bifacial
        cells.
      </p>
    ),
    fullBlack: (
      <p>
        Fully black modules are characterized by an excellent appearance. You
        increase the appeal of your building while combining it with a
        photovoltaic system. However, the efficiency of the modules is usually
        somewhat lower compared to standard modules.
      </p>
    ),
  };

  return (
    <section className={styles.varietySection}>
      <div className={styles.imageContainer}>
        <img
          src={solarSystem}
          alt="Solar System"
          className={styles.solarImage}
        />
      </div>
      <div className={styles.accordionContainer}>
        <ul>
          <li className={styles.glassFilmWrapper}>
            <div
              onClick={() =>
                setSelectedItem(
                  selectedItem === "glassFilm" ? null : "glassFilm"
                )
              }
              className={styles.header}
            >
              <div>Glass Film</div>
              {selectedItem === "glassFilm" && (
                <div
                  className={`${styles.sharedContent} ${
                    selectedItem === "glassFilm" ? styles.visible : ""
                  }`}
                >
                  {content.glassFilm}
                </div>
              )}
            </div>
          </li>

          <li className={styles.glassGlassWrapper}>
            <div
              onClick={() =>
                setSelectedItem(
                  selectedItem === "glassGlass" ? null : "glassGlass"
                )
              }
              className={styles.header}
            >
              <div>Glass-Glass</div>
              {selectedItem === "glassGlass" && (
                <div
                  className={`${styles.sharedContent} ${
                    selectedItem === "glassGlass" ? styles.visible : ""
                  }`}
                >
                  {content.glassGlass}
                </div>
              )}
            </div>
          </li>

          <li className={styles.fullBlackWrapper}>
            <div
              onClick={() =>
                setSelectedItem(
                  selectedItem === "fullBlack" ? null : "fullBlack"
                )
              }
              className={styles.header}
            >
              <div>Full Black</div>
              {selectedItem === "fullBlack" && (
                <div
                  className={`${styles.sharedContent} ${
                    selectedItem === "fullBlack" ? styles.visible : ""
                  }`}
                >
                  {content.fullBlack}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
