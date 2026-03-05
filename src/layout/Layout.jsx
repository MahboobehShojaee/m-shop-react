import {
  PiShoppingCartSimpleBold,
  PiUserLight,
  PiMagnifyingGlassLight,
  PiGithubLogoLight,
  PiEnvelopeLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <div className={styles.navLeft}>
          <div className={styles.menuLine}></div>
        </div>

        <Link to="/products" className={styles.logo}>
          M shop
        </Link>

        <div className={styles.navRight}>
          <PiMagnifyingGlassLight className={styles.icon} />
          <PiUserLight className={styles.icon} />
          <Link to="/checkout" className={styles.cartLink}>
            <div className={styles.cartIconContainer}>
              <PiShoppingCartSimpleBold />
              {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
            </div>
          </Link>
        </div>
      </header>

      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerContent}>
          <p>
            Developed with ♡ by <span>Mahboob</span>
          </p>
          <div className={styles.contactLinks}>
            <a
              href="mailto:mahboobehshojaee0@gmail.com"
              title="Send me a Gmail"
            >
              <PiEnvelopeLight />
            </a>
            <a
              href="https://github.com/mahboobehshojaee"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
            >
              <PiGithubLogoLight />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
