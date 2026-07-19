import { FaShippingFast } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2>Why Shop With Us?</h2>

      <div className="why-grid">
        <div className="box">
          <FaShippingFast />
          <h3>Fast Delivery</h3>
          <p>Receive your gadgets quickly and safely.</p>
        </div>

        <div className="box">
          <FaShieldAlt />
          <h3>Secure Shopping</h3>
          <p>Trusted payment and quality assurance.</p>
        </div>

        <div className="box">
          <FaHeadset />
          <h3>24/7 Support</h3>
          <p>Our support team is always available.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
