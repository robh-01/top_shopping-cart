import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import styles from "./Navbar.module.css";

export default function Navbar() {
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
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
}