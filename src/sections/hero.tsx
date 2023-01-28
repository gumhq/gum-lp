import Lottie from 'react-lottie';
import styles from '@/styles/Home.module.scss';
import * as animationData from '@/components/hero-animation.json';

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroContentLeft}>
          <p className="text weight-700 size-52 gray-800 nm">{"The building blocks you need to build sticky dApps"}</p>
          <p className="text weight-400 size-20 gray-500">{"Our SDK is all you need to make your applications sticky, engaging and fun to use."}</p>
          <div className={styles.heroButtons}>
            <button>Start Building</button>
            <button>Read Docs</button>
          </div>
        </div>
        <div className={styles.heroAnimation}>
          <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={"100%"} width={"100%"} />
        </div>
      </div>
    </section>
  )
};

export { Hero };