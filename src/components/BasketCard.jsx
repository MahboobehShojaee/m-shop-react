import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

function BasketCard({ data }) {
  const { image, title, quantity, price } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.info}>
        <h4 className={styles.title}>{shortenText(title)}</h4>
        <p className={styles.unitPrice}>${price} per item</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.counter}>
          {quantity === 1 ? (
            <button
              className={styles.deleteBtn}
              onClick={() => dispatch(removeItem(data))}
            >
              <MdDeleteOutline />
            </button>
          ) : (
            <button
              className={styles.controlBtn}
              onClick={() => dispatch(decrease(data))}
            >
              <HiOutlineMinus />
            </button>
          )}

          <span className={styles.quantity}>{quantity}</span>

          <button
            className={styles.controlBtn}
            onClick={() => dispatch(increase(data))}
          >
            <HiOutlinePlus />
          </button>
        </div>
        <p className={styles.totalItemPrice}>
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default BasketCard;
