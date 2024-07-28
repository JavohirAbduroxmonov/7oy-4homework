import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>
        <Link to={"/"}>{title}</Link>
      </h1>
    </header>
  );
};

export default Header;
