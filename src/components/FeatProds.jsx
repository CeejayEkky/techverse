import { useEffect, useState } from "react";
import ProductCard from "../components/ProdCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const featured = products.slice(0, 4);

  return (
    <section className="featured">
      <h2>Featured Products</h2>

      <p>Discover some of our best-selling gadgets.</p>

      <div className="featured-grid">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;