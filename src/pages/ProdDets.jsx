import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { toast } from "react-toastify";

const ProdDets = () => {
  const { id } = useParams();

  const { dispatch } = useContext(CartContext);
  const { dispatch: wishlistDispatch } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id === Number(id)
        );
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error loading product:", error));
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    toast.success(`${product.name} added to cart!`);
  };

  const addToWishlist = () => {
    if (!product) return;

    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });

    toast.success(`${product.name} added to wishlist!`);
  };

  if (!product) {
    return <h2>Loading product...</h2>;
  }

  return (
    <section className="details">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">
        <h1>{product.name}</h1>

        <h3>{product.category}</h3>

        <h2>₦{product.price.toLocaleString()}</h2>

        <p>{product.description}</p>

        <p className="rating">⭐⭐⭐⭐⭐ (4.9)</p>

        <button onClick={addToCart}>Add To Cart</button>

        <button className="wish-btn" onClick={addToWishlist}>
          Add To Wishlist
        </button>
      </div>
    </section>
  );
};

export default ProdDets;