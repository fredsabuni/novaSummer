

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";


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
      className={`header-nav menu_style_home_one home7 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container p0">
        {/* <!-- Ace Responsive Menu --> */}

        <div className="d-flex align-items-center flex-wrap home6-nav">
          <Link to="/home" className="navbar_brand float-start dn-smd">
            <img
             
              className="logo1 img-fluid"
              src="/assets/images/summer_logo_w.png"
              alt="summer_logo_w.png"
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

          <nav className="ms-auto">
            <HeaderMenuContent />
          </nav>
          {/* End .navbar */}
        </div>
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
