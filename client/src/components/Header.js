import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        Reactbox
      </a>
      <nav className="nav-links"></nav>
      <nav className="login">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
