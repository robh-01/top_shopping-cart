import styles from "./CartProductCard.module.css";
import { Trash2 } from "lucide-react";

export default function CartProductCard({ item, setCartItems }) {
  function handleDelete() {
    setCartItems((draft) => {
      return draft.filter((it) => it.cartId !== item.cartId);
    });
  }

  function handleCheckoutSelectionToggle() {
    setCartItems((draft) => {
      draft.forEach((it) => {
        if (it.cartId === item.cartId) {
          it.isSelectedForCheckout = !it.isSelectedForCheckout;
        }
      });
    });
  }

  return (
    <div className={styles.productCard}>
      <input
        type="checkbox"
        checked={item.isSelectedForCheckout}
        onClick={handleCheckoutSelectionToggle}
      />
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={item.product.image}
          alt={item.product.title}
        />
      </div>
      <div className={styles.productDescriptionContainer}>
        <p>{item.product.title}</p>
        <p>{item.product.price}</p>
        <p>{item.count}</p>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <Trash2 />
      </button>
    </div>
  );
}
