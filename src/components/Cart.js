import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4">
      <div className="font-bold text-xl">Cart</div>
      <button onClick={handleClearCart} className="p-2 m-2 bg-amber-300">
        Clear Cart
      </button>
      {items.map((item) => {
        return <ItemList key={item.id} items={item} />;
      })}
    </div>
  );
};

export default Cart;
