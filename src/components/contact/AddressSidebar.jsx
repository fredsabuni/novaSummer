import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Nova Summer Meadows</h4>
      <p>
      Have questions?  We'd love to hear from you!  Fill out the form below or contact us directly using the information provided.
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
               123 Main Street<br/>
               Durham, NC 27701<br/>
               United States<br /> 
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>(919) 555-1212</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>abraham@abranova.com</p>
      </div>
      <div className="content_list">
        <h5> </h5>
        <p></p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
