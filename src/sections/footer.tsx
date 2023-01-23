import Image from 'next/image';
import logo from '@/images/gum.svg';
import styles from '@/styles/Home.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="" />
        <div></div>
      </div>
    </footer>
  );
}

export { Footer };