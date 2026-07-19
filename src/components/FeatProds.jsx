import products from "../data/products";
import ProductCard from "../components/ProdCard";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="featured">
      <h2>Featured Products</h2>

      <p>Discover some of our best-selling gadgets.</p>

      <div className="featured-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
