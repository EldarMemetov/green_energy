import { useEffect, useRef } from "react";
import styles from "./HeroFunctionVideos.module.css";
import videoSrc from "../HeroVideos/heroVideo.mp4";

const HeroFunctionVideos = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Проверка, является ли устройство мобильным
    const isMobile = window.innerWidth <= 600;

    // Программный запуск видео на мобильных устройствах
    if (isMobile && videoRef.current) {
      // Проверяем, можно ли воспроизвести видео
      videoRef.current.play().catch((error) => {
        console.error(
          "Ошибка автозапуска видео на мобильном устройстве:",
          error
        );
      });

      // Добавляем обработчик touchstart для автозапуска при взаимодействии
      const handleTouchStart = () => {
        videoRef.current.play();
      };

      window.addEventListener("touchstart", handleTouchStart);

      // Очищаем обработчик при размонтировании компонента
      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, []);

  return (
    <section className={styles.sectionVideos}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
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
