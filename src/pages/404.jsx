import { Link } from "react-router-dom";
import { PiGhostLight, PiArrowLeftLight } from "react-icons/pi";
import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <PiGhostLight />
        </div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Item Not Found</h2>
        <p className={styles.text}>
          Oops! It seems this page has been freshly squeezed out of existence.
          Let's get you back to the collection.
        </p>
        <Link to="/products" className={styles.link}>
          <PiArrowLeftLight /> Back to shop
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
