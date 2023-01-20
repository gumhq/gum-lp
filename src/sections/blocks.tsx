import styles from '@/styles/Home.module.scss';
import { concatClassNames } from 'src/utils/classname';

function Blocks() {
  return (
    <section className={styles.blocksSection}>
      <div className={styles.blocksText}>
        <p className={concatClassNames("text weight-700 size-48 gray-800 nm", styles.blocksHeading)}>{"The building blocks you need to build sticky dApps"}</p>

      </div>
    </section>
  )
};

export { Blocks };