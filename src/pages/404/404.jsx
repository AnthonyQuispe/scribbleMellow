import "./404.scss";
import ErrorImage from "../../assets/Images/404.png";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <Link to={"/"}>
        <img
          className="error__img"
          src={ErrorImage}
          alt="Picture of Scribble Me Mellow saying you reach a 404 error page."
        />
      </Link>
      <h1 className="error__title">Something went wrong.</h1>
      <p className="error__text">
        Try Clicking the Back button or click on Me to go back to the homepage
      </p>
    </section>
  );
}
