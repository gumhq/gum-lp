import Image from 'next/image';
import logo from '@/images/gum.svg';
import styles from '@/styles/Home.module.scss';

// Icon Imports
import WordcelIcon from '@/components/icons/Wordcel';
import DiscordIcon from '@/components/icons/Discord';
import TwitterIcon from '@/components/icons/Twitter';
import GithubIcon from '@/components/icons/Github';

const socials = [
  { link: 'https://github.com/gumhq', icon: GithubIcon },
  { link: 'https://twitter.com/gumisfunn', icon: TwitterIcon },
  { link: 'https://discord.gg/tCswbSK5W2', icon: DiscordIcon },
  { link: "https://wordcelclub.com/gumsocial.sol", icon: WordcelIcon },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src={logo} alt="" />
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.link}>
                {<social.icon color="#1E2833" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };