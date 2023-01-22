import styles from '@/styles/Home.module.scss';
import { Navbar } from './navbar';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <Navbar />
    </section>
  )
};

export { Hero };