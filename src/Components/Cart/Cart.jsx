import { useContext } from "react";
import { CartItemsContext } from "../../App";
import CartProductCard from "../CartProductCard/CartProductCard";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const cartProductCards = cartItems.length > 0 ? cartItems.map((item) => {
    return <CartProductCard key={item.cartId} item={item} />;
  }) : <p>No items in the cart.</p>

  return cartProductCards;
}
