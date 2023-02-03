import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import logo from '@/images/gum.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Image src={logo} alt="" />
        <div className={styles.navLinks}>
          <a rel="noopener noreferrer" target="_blank" href="https://docs.gum.fun/">Docs</a>
          <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/tCswbSK5W2">Community</a>
          <a rel="noopener noreferrer" target="_blank" href="https://wordcelclub.com/gumsocial.sol">Blog</a>
        </div>
        <button onClick={() => window.open('https://github.com/gumhq', '_blank')} className={styles.navButton}>Start Building</button>
      </div>
    </nav>
  );
}

export { Navbar }