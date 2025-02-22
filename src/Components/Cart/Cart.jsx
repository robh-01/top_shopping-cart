import { useContext } from "react";
import { CartItemsContext } from "../../App";
import CartProductCard from "../CartProductCard/CartProductCard";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const selectedCartItemsForCheckout = cartItems.filter(
    (item) => item.isSelectedForCheckout
  );

  function getTotalAmount(selectedCartItems) {
    let total = 0;
    selectedCartItems.forEach((item) => {
      total += item.product.price * item.count;
    });
    return total;
  }

  function handleCheckout() {
    setCartItems((draft) => {
      return draft.filter((item) => !item.isSelectedForCheckout);
    });
  }

  const jsxToReturn = (
    <div className={styles.cartPage}>
      <div className={"container " + styles["container--cartPage"]}>
        {cartItems.length < 1 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            <div className={styles.productCardsContainer}>
              {cartItems.map((item) => {
                return (
                  <CartProductCard
                    key={item.cartId}
                    item={item}
                    setCartItems={setCartItems}
                  />
                );
              })}
            </div>
            <div className={styles.checkoutSection}>
              {selectedCartItemsForCheckout.length > 0 ? (
                <>
                  <p>
                    Total Amount: ${" "}
                    {getTotalAmount(selectedCartItemsForCheckout)}
                  </p>

                  <button onClick={handleCheckout}>
                    <a
                      href="https://youtu.be/dQw4w9WgXcQ?si=fuEK6FN8T1Qe791l"
                      target="_blank"
                    >
                      Proceed to Checkout
                    </a>
                  </button>
                </>
              ) : (
                "No items selected. Select a item to initiate the checkout."
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return jsxToReturn;
}
