import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>Stay In Touch</h2>
          <p>Contact Us to Learn More</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd"> 
          <a className="btn btn-thm2" href="email:abranova@abranova.com">
              <span className="flaticon-envelope"></span> Email Us
           </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
