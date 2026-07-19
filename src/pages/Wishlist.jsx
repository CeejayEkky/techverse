import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, dispatch } = useContext(WishlistContext);

  return (
    <section className="wishlist">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>Your Wishlist Is Empty.</h2>
      ) : (
        wishlist.map((item) => (
          <div className="wish-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h2>{item.name}</h2>

              <p>${item.price}</p>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",

                    payload: item.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Wishlist;
