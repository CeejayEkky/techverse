import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span>
          <FaRocket />
          &nbsp;&nbsp; Latest Technology 2026
        </span>

        <h1>
          Discover The Future
          <br />
          Of Technology
        </h1>

        <p>
          Explore premium gadgets built for creators, gamers and professionals.
        </p>

        <div className="hero-buttons">
          <Link to="/products">
            <button>Shop Now</button>
          </Link>

          <Link to="/about">
            <button className="outline">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
