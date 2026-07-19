

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About TechVerse</h1>

        <p>
          TechVerse is a modern online gadget store built with React made by <span style={{color: "orangered", borderBottom: "2px solid orangered"}}>Ceejay and Bassey Julius</span>. It
          provides users with an easy way to browse, search, wishlist and
          purchase quality technology products.
        </p>

        <div className="about-cards">
          <div className="card">
            <h2>🎯 Our Mission</h2>
            <p>Deliver quality gadgets with excellent customer service.</p>
          </div>

          <div className="card">
            <h2>🚀 Our Vision</h2>
            <p>Become one of the leading online technology stores.</p>
          </div>

          <div className="card">
            <h2>⭐ Why TechVerse?</h2>
            <p>Affordable prices, trusted products and fast delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
