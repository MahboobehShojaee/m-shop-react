import { PiArrowRightLight, PiTimerLight, PiCheckCircleLight } from "react-icons/pi";
import styles from "./BasketSidebar.module.css";
import { checkout } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function BasketSidebar({ state }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <h3 className={styles.title}>Summary</h3>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.item}>
          <span className={styles.label}>Items</span>
          <span className={styles.value}>{state.itemsCounter}</span>
        </div>
        
        <div className={styles.item}>
          <span className={styles.label}>Total</span>
          <span className={styles.totalValue}>${state.total}</span>
        </div>

        <div className={styles.statusRow}>
           <span className={styles.label}>Status</span>
           <div className={styles.statusBadge}>
             {!state.checkout ? (
               <>
                 <span className={styles.pulseDot}></span>
                 <p>Pending Review</p>
               </>
             ) : (
               <>
                 <PiCheckCircleLight className={styles.checkIcon} />
                 <p>Confirmed</p>
               </>
             )}
           </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.checkoutBtn} onClick={() => dispatch(checkout())}>
          <span>Complete Order</span>
          <div className={styles.iconCircle}>
            <PiArrowRightLight />
          </div>
        </button>
      </div>
    </div>
  );
}

export default BasketSidebar;