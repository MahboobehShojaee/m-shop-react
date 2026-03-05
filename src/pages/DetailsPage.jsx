import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  PiTagLight,
  PiStackLight,
  PiArrowLeftLight,
  PiPlusCircleLight,
} from "react-icons/pi";

import { fetchProducts } from "../features/product/productSlice";
import { addItem } from "../features/cart/cartSlice";

import Loader from "../components/Loader";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productDetails = useSelector((store) =>
    store.product.products.find((i) => i.id === +id),
  );

  const addToCartHandler = () => {
    dispatch(addItem(productDetails));
  };

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.wrapper}>
      <Link to="/products" className={styles.backBtn}>
        <PiArrowLeftLight /> <span>Back to Collection</span>
      </Link>

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src={productDetails.image} alt={productDetails.title} />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.headerInfo}>
            <span className={styles.categoryTag}>
              <PiStackLight /> {productDetails.category}
            </span>
          </div>

          <h1 className={styles.title}>{productDetails.title}</h1>

          <p className={styles.description}>{productDetails.description}</p>

          <div className={styles.footer}>
            <div className={styles.priceTag}>
              <PiTagLight />
              <span>${productDetails.price}</span>
            </div>

            <button className={styles.addToCartBtn} onClick={addToCartHandler}>
              <PiPlusCircleLight />
              <span>Add to selection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
