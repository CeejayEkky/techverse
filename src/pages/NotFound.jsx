import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        Back Home
      </Link>

    </section>
  );
};

export default NotFound;