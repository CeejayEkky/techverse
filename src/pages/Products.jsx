import { useEffect, useState } from "react";
import ProductCard from "../components/ProdCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Laptop",
    "Phone",
    "Headphones",
    "Watch",
    "Accessories",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products">
      <div className="products-header">
        <h1>Explore Our Gadgets</h1>

        <p>Find premium devices built for work, gaming and everyday life.</p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="empty">
            <h2>No Product Found 😥</h2>
            <p>Try another search keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
