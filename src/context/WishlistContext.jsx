import { createContext, useReducer, useEffect } from "react";
import {
  wishlistReducer,
  wishlistInitialState,
} from "../reducers/wishlistReducer";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const storedWishlist = localStorage.getItem("wishlist");

  const [state, dispatch] = useReducer(
    wishlistReducer,
    storedWishlist
      ? {
          wishlist: JSON.parse(storedWishlist),
        }
      : wishlistInitialState
  );

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(state.wishlist)
    );

  }, [state.wishlist]);

  return (

    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        dispatch,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};

export default WishlistProvider;