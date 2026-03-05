import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Fetching Freshness...</p>
    </div>
  );
}

export default Loader;
