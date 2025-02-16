import { Link } from "react-router-dom";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Nova Summer Meadows</h4>
          <p>
          Positioned at 433 Hebron Road, this development is just minutes 
          from Duke University Hospital—one of the top-rated hospitals in North Carolina—and Duke University.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Neighborhood</Link>
            </li>
            <li>
              <Link to="/">Amenities</Link>
            </li>
            <li>
              <Link to="/">Floor Plans</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@findhouse.com">abraham@abranova.com</a>
            </li>
            <li>
              <a href="#">Abranova Inc. 16 West Martin Street Raleigh</a>
            </li>
            <li>
              <a href="#">Suite 301 Raleigh.</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 (984)259-7579</a>
            </li>
            <li>
              <a href="tel:+4733378901">+1 (919)377 2400</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
