import { createContext } from "react";
import { useImmer } from "use-immer";

import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

export const CartItemsContext = createContext();

export default function App() {
  const [cartItems, setCartItems] = useImmer([]);

  return (
    <>
      <Navbar />
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <Outlet />
      </CartItemsContext.Provider>
    </>
  );
}
