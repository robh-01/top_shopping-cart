import { useEffect, useState, useContext } from "react";
import { CartItemsContext } from "../../App";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductsPage.module.css";

function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products", { signal })
      .then((response) => {
        if (response.status >= 400) {
          throw Error("server error");
        }
        return response.json();
      })
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
        console.log(fetchedProducts);

        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") return; //ignore abort errors(errors that arise from cancelling fetch)
        setError(error);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { products, loading, error };
}

export default function ProductsPage() {
  const { products, error, loading } = useProducts();
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  console.log("Cart:");
  console.log(cartItems);

  return (
    <>
      <div className={styles.productPage}>
        <div className={"container " + styles["container--productPage"]}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred. Please try again later!</p>
          ) : (
            <div className={styles.productCardsContainer}>
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
