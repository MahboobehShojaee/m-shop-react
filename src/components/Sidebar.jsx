import { PiShapesLight } from "react-icons/pi";
import { createQueryObject } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constants/list";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (category) => {
    const categoryName =
      category.toLowerCase() === "all" ? "" : category.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: categoryName }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleContainer}>
        <PiShapesLight />
        <p>Categories</p>
      </div>
      <ul className={styles.categoryList}>
        {categories.map((item) => (
          <li
            key={item.id}
            onClick={() => categoryHandler(item.type)}
            className={
              item.type.toLowerCase() === query.category ||
              (item.type.toLowerCase() === "all" && !query.category)
                ? styles.selected
                : styles.categoryItem
            }
          >
            <span
              className={`${styles.colorDot} ${styles[item.type.toLowerCase().replace(/\s|'/g, "")]}`}
            ></span>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
