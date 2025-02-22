import styles from "./CartProductCard.module.css";
import { Trash2 } from "lucide-react";

export default function CartProductCard({ item }) {
  // return <h1 className={styles.style}>{item.product.title}</h1>;

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img className={styles.productImage} src={item.product.image} alt={item.product.title} />
      </div>
      <div className={styles.productDescriptionContainer}>
        <p>{item.product.title}</p>
        <p>{item.product.price}</p>
        <p>{item.count}</p>
      </div>
      <button className={styles.deleteButton}>
        <Trash2 />
      </button>
    </div>
  );
}
