import styles from "@components/FooterNew.module.scss";
import TwitterSVG from "./svgs/TwitterSVG";
import GithubSVG from "./svgs/GithubSVG";
import GutterContainer from "./GutterContainer";
import FilecoinSVG from "./svgs/FilecoinSVG";

export default function FooterNew() {
  return (
    <footer className={styles.footer}>
      <GutterContainer>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <a href="https://filecoin.io/" target="_blank">
              <FilecoinSVG style={{ width: "2.5rem" }} />
            </a>
            <p className={styles.filecoinLogo}>Filecoin</p>
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.socialIconsRow}>
              <a
                className={styles.link}
                href="https://github.com/filecoin-project/filecoin-docs"
                target="_blank"
              >
                <GithubSVG style={{ width: "1.5rem" }} />
              </a>
              <a
                className={styles.link}
                href="https://twitter.com/filecoin"
                target="_blank"
              >
                <TwitterSVG style={{ width: "1.5rem" }} />
              </a>
            </div>
          </div>
        </div>
      </GutterContainer>
    </footer>
  );
}
