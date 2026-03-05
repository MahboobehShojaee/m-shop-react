import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckoutPage.module.css";
import { useSelector } from "react-redux";
import { PiBasketLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyIcon}>
          <PiBasketLight />
        </div>
        <h2>Your basket is empty</h2>
        <p>It seems you haven't discovered any item yet.</p>
        <Link to="/products" className={styles.shopBtn}>
          Start Discovery
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1>Your Selection</h1>
        <p>Review your items before we prepare your delivery.</p>
      </header>

      <div className={styles.container}>
        <div className={styles.products}>
          {state.selectedItems.map((product) => (
            <BasketCard key={product.id} data={product} />
          ))}
        </div>

        <aside className={styles.sidebarWrapper}>
          <BasketSidebar state={state} />
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
