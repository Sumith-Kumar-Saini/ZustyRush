import NavLink from "./NavLink";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex items-center justify-center px-4 py-2">
      <div className="navbar-container flex items-center justify-between w-4/5 max-w-5xl">
        <div className="left">
          <NavLink to="/">
            <Logo className="w-48" />
          </NavLink>
        </div>
        <div className="right flex items-center gap-10">
          <NavLink to="/">Menu</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
