const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
               What types of apartments do you offer at Nova Summer Meadows?
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              We offer a variety of spacious and modern floor plans, including one-bedroom, two-bedroom, and three-bedroom apartments.   
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              What amenities do you offer at Nova Summer Meadows?
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Nova Summer Meadows boasts a fantastic array of amenities designed to enhance your lifestyle. 
              Enjoy our sparkling swimming pool, stay active in our state-of-the-art fitness center, relax in our resident clubhouse, and take advantage of our convenient on-site parking. 
              We also offer other key amenities, e.g., a dog park. 
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Where is Nova Summer Meadows located?
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Nova Summer Meadows is conveniently located at 433 Hebron Road in the heart of Durham, NC. 
              We're just minutes from Duke University Hospital—one of the top-rated hospitals in North Carolina—and Duke University and the Research Triangle Park. 
              Our central location offers easy access to major highways, making commutes a breeze.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Is Nova Summer Meadows pet-friendly?
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Absolutely! We welcome your furry friends at Nova Summer Meadows.  
              Please review our Pet Policy for complete details.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How do I submit a maintenance request?
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              We make it easy to submit maintenance requests. You can do so online through our resident portal, which is accessible 24/7. 
              You can also call our leasing office during business hours, and we'll be happy to assist you.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        {/* <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Letraset sheets containing Lorem Ipsum passages
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div> */}
        {/* End .card */}

        {/* <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Model sentence structures, to generate
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div> */}
        {/* End .card */}

        {/* <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              The first line of Lorem Ipsum
            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div> */}
        {/* End .card */}

        {/* <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Finibus Bonorum et Malorum by Cicero are also
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div> */}
        {/* End .card */}

        {/* <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Letraset sheets containing Lorem Ipsum passages
            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </p>
            </div>
          </div>
        </div> */}
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
