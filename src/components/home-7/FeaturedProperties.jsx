import { Link, useNavigate } from "react-router-dom";
import properties from "../../data/properties";


const FeaturedProperties = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {properties.map((item) => (
        <div className="col-md-6 col-lg-6" key={item.id}>
          <div className="item">
            <div className="feat_property">
              <div className="thumb">
                <img
                
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="fp1.jpg"
                />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="icon mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-transfer-1"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-heart"></span>
                      </a>
                    </li>
                  </ul> */}

                  <Link
                    to={`/contact`}
                    className="fp_price"
                  >
                    ${item.price}
                    <small>/mo</small>
                  </Link>
                </div>
              </div>

              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link to={`/contact`}>
                      {item.title}
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fp_footer">  
                  <div className="float-end">
                  <button
                      onClick={() => navigate("/contact")}
                      type="submit"
                      className="btn btn-thm">
                      Enquire Now
                    </button>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedProperties;
