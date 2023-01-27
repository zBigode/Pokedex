import "./navbar.css";

const Navbar = () => {
  const logo_img =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img className="navbar-img" src={logo_img} alt="logo" />
      </div>
    </nav>
  );
};
export default Navbar;
