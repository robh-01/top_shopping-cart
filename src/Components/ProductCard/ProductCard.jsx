import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <>
      <div className={styles.productCard}>
        <img className={styles.productImage} src={product.image} alt="" />
        <p className={styles.productTitle}> {product.title}</p>
        <p className={styles.productPrice}> {product.price}</p>
        <p className={styles.productRating}>
          Rating: {product.rating.rate} out of 5 ({product.rating.count}{" "}
          Reviews)
        </p>
      </div>
    </>
  );
}
