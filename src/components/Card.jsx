import { Link } from "react-router-dom";
import { TbListDetails, TbPlus, TbMinus } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";

function Card({ data }) {
  const { id, title, image, price, category } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(state, id);

  const getBgColor = (cat) => {
    const colors = {
      electronics: "#fef3c7", 
      jewelery: "#fee2e2", 
      "men's clothing": "#d1fae5", 
      "women's clothing": "#f3e8ff", 
    };
    return colors[cat] || "#f3f4f6";
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ backgroundColor: getBgColor(category) }}
      >
        <img src={image} alt={title} className={styles.productImg} />
      </div>

      <div className={styles.details}>
        <Link to={`/products/${id}`} className={styles.detailLinkWrapper}>
          <h3>
            {shortenText(title)}
            <span className={styles.detailIcon}>
              <TbListDetails />
            </span>
          </h3>
        </Link>
        <p className={styles.price}>${price}</p>
      </div>

      <div className={styles.actions}>
        {quantity === 0 ? (
          <button
            className={styles.addButton}
            onClick={() => dispatch(addItem(data))}
          >
            <TbShoppingBagPlus />
          </button>
        ) : (
          <div className={styles.counter}>
            {quantity === 1 ? (
              <button
                onClick={() => dispatch(removeItem(data))}
                className={styles.controlBtn}
              >
                <MdDeleteOutline />
              </button>
            ) : (
              <button
                onClick={() => dispatch(decrease(data))}
                className={styles.controlBtn}
              >
                <TbMinus />
              </button>
            )}
            <span className={styles.quantity}>{quantity}</span>
            <button
              onClick={() => dispatch(increase(data))}
              className={styles.controlBtn}
            >
              <TbPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
