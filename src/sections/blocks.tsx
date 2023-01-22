import styles from '@/styles/Home.module.scss';
import { concatClassNames } from 'src/utils/classname';

function Blocks() {
  return (
    <section className={styles.blocksSection}>
      <div className={styles.blocksText}>
        <div className={styles.blocksHeading}>
          <p className="text weight-700 size-48 gray-800 nm">{"The building blocks you need to build sticky dApps"}</p>
        </div>
        <div className={styles.blocksSubHeading}>
          <p className="text weight-400 size-24 gray-500">Gum empowers developers with a whole host of tools to build rich and seamless social apps that people stick to</p>
          <p className={concatClassNames("text weight-500 size-24 inter blue", styles.docsLink)}>Read Docs <span>{"->"}</span></p>
        </div>
      </div>
    </section>
  )
};

export { Blocks };