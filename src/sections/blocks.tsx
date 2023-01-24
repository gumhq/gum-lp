import styles from '@/styles/Home.module.scss';
import { concatClassNames } from 'src/utils/classname';

// Blocks Import
import allBlocks from '@/images/blocks/all.svg';
import profiles from '@/images/blocks/profiles.svg';
import actions from '@/images/blocks/actions.svg';
import loops from '@/images/blocks/loops.svg';
import graph from '@/images/blocks/graph.svg';
import Image from 'next/image';

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
      {/* For wider screens */}
      <div className={styles.blocksAll}>
        <Image src={allBlocks} alt="" />
      </div>
      {/* For mobile screens */}
      <div className={styles.blocksGrid}>
        <Image src={loops} alt="" />
        <Image src={actions} alt="" />
        <Image src={profiles} alt="" />
        <Image src={graph} alt="" />
      </div>
    </section>
  )
};

export { Blocks };