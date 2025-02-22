import styles from "./ProductCard.module.css";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, cartItems, setCartItems }) {
  // function that returns false if the product is not in cart otherwise returns the index of the item if it is cart
  function isProductInCart(product) {
    const index = cartItems.findIndex((p) => p.product.id === product.id);
    return index === -1 ? false : index;
  }

  function addToCart(product) {
    const productAlreadyInCart = isProductInCart(product);
    if (productAlreadyInCart === false) {
      setCartItems((draft) => {
        draft.push({
          cartId: crypto.randomUUID(),
          product: product,
          count: 1,
        });
      });
    } else {
      setCartItems((draft) => {
        draft[productAlreadyInCart].count += 1;
      });
    }
  }

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
        <button
          className={styles.addToCartBtn}
          onClick={() => {
            addToCart(product);
          }}
        >
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </>
  );
}
