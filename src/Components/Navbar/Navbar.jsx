import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartItemsContext } from "../../App";

import styles from "./Navbar.module.css";

function ShoppingCartWithBadge({ count }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ShoppingCart />
      {count > 0 && (
        <span
          className={styles.cartLogoBatch}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <nav className={styles.navbar}>
      <div className={"container " + styles["container--navbar"]}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <Link to="/" className={styles.navLink}>
            Shop<span>Up</span>
          </Link>
        </div>
        <div className={styles.cartIcon}>
          <Link to="/cart" className={styles.navLink}>
            <ShoppingCartWithBadge count={cartItems.length} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
