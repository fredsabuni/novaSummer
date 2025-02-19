

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Menu Toggle btn--> */}
        <Link to="/" className="navbar_brand float-start dn-smd"> 
          <img
             
             className="logo1 img-fluid"
             src="/assets/images/summer_logo.png"
             alt="summer_logo.png"
             style={{ maxHeight: "200px", maxWidth: "200px" }}
           />
           <img
            
             className="logo2 img-fluid"
             src="/assets/images/summer_logo.png"
             alt="summer_logo.png"
             style={{ maxHeight: "200px", maxWidth: "200px" }}
           />  
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
