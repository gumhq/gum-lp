import Image from 'next/image';
import logo from '@/images/gum-xl.svg';
import legosImage from '@/images/legos.svg';

import styles from '@/styles/Home.module.scss';

function Legos() {
  return (
    <section className={styles.legosSection}>
      <div className={styles.legoContent}>
        <Image src={logo} alt="" />
        <div className={styles.legoText}>
          <p className="text weight-700 size-48 gray-800 nm mt-1">{"Social Legos for Solana"}</p>
          <p className="text weight-400 size-24 gray-500">{"Built on account compression, the same tech that powers compressed NFTs"}</p>
        </div>
        <div className={styles.legoImage}>
          <Image src={legosImage} alt="" />
        </div>
      </div>
      <div className={styles.chewSection}>
        <p className="text weight-700 size-48 white nm">{"Chew"} <span className={styles.glassStrike}>{"Glass"}</span> {"Gum"}</p>
        <div className={styles.blueButtons}>
          <button>Start Building</button>
          <button>Read Docs</button>
        </div>
      </div>
    </section>
  );
}

export { Legos }