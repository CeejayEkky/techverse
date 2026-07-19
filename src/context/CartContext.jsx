import { createContext, useReducer, useEffect } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const storedCart = localStorage.getItem("cart");

  const [state, dispatch] = useReducer(
    cartReducer,
    storedCart
      ? { cart: JSON.parse(storedCart) }
      : initialState
  );

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;