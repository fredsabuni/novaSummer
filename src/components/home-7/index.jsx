import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import SimpleFilter from "../common/SimpleFilter";
import WhyChoose from "./WhyChoose";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import HotProperties from "./HotProperties";
import Testimonial from "./Testimonial";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";
import GalleryHomeBox from "../gallery/GalleryHomeBox";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Why Chose Us --> */}
      {/* <section id="why-chose" className="whychose_us pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div> 
      </section> */}

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Location Overview</h2>
                <p>Durham, North Carolina: A Nexus of Innovation and Lifestyle.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
          </div>
        </div>
      </section>

     {/* <!-- Feature Properties --> * */}
      <section id="feature-property" className="feature-property bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Floor Plans</h2>
                <p>Modern Apartments for rent in Durham, NC.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FeaturedProperties />
          </div>
          {/* End .row */}
        </div>
      </section> 

      {/* <!-- Our Hot Offier --> */}

      {/* <section className="our-hot-offer parallax">
        <div className="container">
          <div className="row mt40">
            <div className="col-md-6 col-lg-4">
              <div className="our_hotoffer">
                <h2>Hot This Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn ht_offer" onClick={() => navigate("/listing-list-v1")}>View All</button>
              </div>
            </div> 
            <HotProperties />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Testimonials --> */}
      {/* <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Testimonials</h2>
                <p>Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Gallery</h2>
                <p>Picture your life here at Nova Summer Meadows.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <GalleryHomeBox />
          </div>
        </div>
      </section>

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners home7 pt50 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="start_partner tac-smd">
                <h2>Stay In Touch</h2>
                <p>Contact Us to Learn More</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4">
              <div className="parner_reg_btn home7 text-right tac-smd">
                <a className="btn" href="email:abranova@abranova.com">
                <span className="flaticon-envelope"></span> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home5">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home5 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
