import { Link } from "react-router-dom";

export default function Navbar() {
  return <div>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/about">About</Link>
    <Link to="/cart">Cart</Link>
  </div>;
}
