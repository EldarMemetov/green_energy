import styles from "./HeroFunctionVideos.module.css";
import videoSrc from "../HeroVideos/heroVideo.mp4";

const HeroFunctionVideos = () => {
  return (
    <section className={styles.sectionVideos}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            loop
            muted
            controls={false}
            className={styles.videoElement}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.contentOverlay}>
          <h1 className={styles.title}>Solar panel installers in Germany</h1>
          <p className={styles.description}>
            Green Energy is an award-winning technology consultancy that
            transforms businesses by generating ideas, building products, and
            accelerating growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroFunctionVideos;
