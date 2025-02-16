
import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
   

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <p className="large">
          Immerse yourself in the vibrant energy of Durham, North Carolina, at Nova Summer Meadows. 
          Our prime location places you at the heart of it all, connecting you to the city's dynamic blend of culture, innovation, and natural beauty.  
          Discover a lifestyle where convenience meets excitement, and where every day offers new opportunities for exploration. 
          </p>
          
          <p>
          Nova Summer Meadows is perfectly situated within the renowned Research Triangle Park (RTP), a global center for technology and research. 
          This coveted location provides residents with unparalleled access to a thriving job market, world-class universities, and a unique mix of urban and suburban living. Whether you're launching your career, pursuing higher education, 
          or simply seeking a stimulating environment, Nova Summer Meadows positions you at the epicenter of the Triangle's dynamism.  Benefit from close proximity to major employers, 
          esteemed institutions like Duke University, UNC Chapel Hill, and NC State University, and the countless cultural and recreational attractions that define the Durham experience. 
          </p>

          <p>
          Beyond the RTP, Durham itself offers a rich tapestry of experiences. Explore the city's revitalized downtown, 
          filled with award-winning restaurants, live music venues, and art galleries. Discover the natural beauty of the Eno River, 
          hike or bike through lush green spaces, or catch a game at the Durham Bulls Athletic Park.  
          From its thriving arts scene to its passionate sports fans, Durham has something for everyone. 
          </p> 
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100 cover"
            src="/assets/images/about/video_thumbnail.png"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
