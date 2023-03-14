import styles from '@components/Navbar.module.scss';
import GutterContainer from './GutterContainer';
import FilecoinSVG from './svgs/FilecoinSVG';
import GithubSVG from './svgs/GithubSVG';
import TwitterSVG from './svgs/TwitterSVG';

export default function Navbar() {
  return (
    <div className={styles.body}>
      <GutterContainer>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <a>
              <FilecoinSVG style={{ width: '2.5rem' }} />
            </a>
            <p>Filecoin</p>
          </div>

          <div className={styles.socialContainer}>
            <a className={styles.textButtonLink}>
              <button className={styles.textButton} style={{}}>
                Protocol Labs
              </button>
            </a>

            <div className={styles.socialIconsRow}>
              <a className={styles.link}>
                <GithubSVG style={{ width: '1.5rem' }} />
              </a>
              <a className={styles.link}>
                <TwitterSVG style={{ width: '1.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </GutterContainer>
    </div>
  );
}
