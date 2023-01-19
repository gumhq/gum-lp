import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import componentsImage from '@/images/components.svg';

function Why() {
  return (
    <div className={styles.sectionPadding}>
      <section className={styles.whySection}>
        <Image src={componentsImage} alt="" />
        <div className={styles.whySectionText}>
          <p className="text weight-700 size-48 gray-800 nm">{"Building so fun, it feels like you're chewing gum"}</p>
          <p className="text weight-400 size-24 gray-500">{"Leverage the power of our open-sourced SDK and easy-to-use component library to build your sticky social media app with ease"}</p>
        </div>
      </section>
    </div>
  );
}

export { Why }