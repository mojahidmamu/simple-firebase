import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <h2>This is header.</h2> */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/mojahid'>Mojahid</NavLink>
    </div>
  );
};

export default Header;
