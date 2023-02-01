import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import logo from '@/images/gum.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Image src={logo} alt="" />
        <div className={styles.navLinks}>
          <a href="#">Docs</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
        </div>
        <button className={styles.navButton}>Start Building</button>
      </div>
    </nav>
  );
}

export { Navbar }