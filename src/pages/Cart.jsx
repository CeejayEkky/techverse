import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart Is Empty.</h2>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h2>{item.name}</h2>

              <p>₦{item.price}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE_QUANTITY",
                      payload: item.id,
                    })
                  }
                >
                  +
                </button>
              </div>

              <h3>Total: ₦ {total}</h3>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
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
      <div className="cart-summary">
        <h2>Grand Total</h2>

        <h1>${total}</h1>

        <button>Proceed To Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
