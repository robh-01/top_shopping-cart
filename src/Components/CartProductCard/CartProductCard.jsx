import styles from "./CartProductCard.module.css";
import { Trash2 } from "lucide-react";

export default function CartProductCard({ item, setCartItems }) {
  function handleDelete() {
    setCartItems((draft) => {
      return draft.filter((it) => it.cartId !== item.cartId);
    });
  }

  return (
    <div className={styles.productCard}>
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
