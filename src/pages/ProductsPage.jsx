import Card from "../components/card";
import Sidebar from "../components/Sidebar"; //
import styles from "./ProductsPage.module.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { fetchProducts } from "../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products, searchParams]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products]);

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroVisualElements}></div>{" "}
        <div className={styles.heroContentContainer}>
          <div className={styles.heroText}>
            <h1>M shop</h1>
            <h2>Test Project</h2>{" "}
          </div>
          <div className={styles.heroActionArea}>
            <div className={styles.searchTitle}>Quick Find</div>
            <div className={styles.searchContainer}>
              <SearchBox
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.mainContent}>
        <Sidebar query={query} setQuery={setQuery} />

        <div className={styles.productsGrid}>
          {loading && <Loader />}
          {!loading && displayed.map((p) => <Card key={p.id} data={p} />)}
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
