import { LogoBox, Menu, SearchBox, Wrapper } from "./style";
// import { link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Wrapper>
      <LogoBox>
        <Link to="/">
          <img src={logo} alt="logo-Eighty4" />
          <span>Eighty4</span>
        </Link>
      </LogoBox>

      <SearchBox htmlFor="main-search">
        <div className="_icon">
          <LuSearch />
        </div>

        <input
          placeholder="Search"
          type="search"
          id="main-search"
          onChange={handleOnChange}
        />
      </SearchBox>

      <Menu>
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Tours</Link>
        </li>
        <li>
          <Link to="/">Air Tickets</Link>
        </li>
        <li>
          <Link to="/"> Tips</Link>
        </li>
        <li>
          <Link to="/"> Blogs</Link>
        </li>
        <li>
          <Link to="/"> About us</Link>
        </li>
        <li>
          <Link to="/"> Contact us</Link>
        </li>
      </Menu>
    </Wrapper>
  );
}

export default Navbar;
