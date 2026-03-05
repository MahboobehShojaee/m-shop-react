import { PiMagnifyingGlassLight } from "react-icons/pi";
import { createQueryObject } from "../helper/helper";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Discover your item..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <button onClick={searchHandler} className={styles.searchButton}>
        <PiMagnifyingGlassLight />
      </button>
    </div>
  );
}

export default SearchBox;
