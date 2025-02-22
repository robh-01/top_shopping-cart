import { useContext } from "react";
import { CartItemsContext } from "../../App";
import CartProductCard from "../CartProductCard/CartProductCard";

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const cartProductCards = cartItems.map((item) => {
    return <CartProductCard key={item.cartId} item={item} />;
  });

  return cartProductCards;
}
