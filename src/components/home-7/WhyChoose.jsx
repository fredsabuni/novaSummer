const WhyChoose = () => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Trusted By Thousands",
      text: ` Our direct international sourcing of materials and in-house construction capabilities allow us to deliver projects $4.8M below market costs on average. `,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Wide Renge Of Properties",
      text: ` We handle every aspect of development in-house, from site work and utilities to vertical construction and finishing. `,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Financing Made Easy",
      text: ` Our properties are strategically located in high-growth areas like Durham, NC, with proximity to major hubs like Duke University, hospitals, and shopping centers. `,
    },
  ];
  return (
    <>
      {whyChooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="why_chose_us home7">
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
