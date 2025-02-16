const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/abranovarealestate/?_rdc=2&_rdr#", icon: "fa-facebook" },
    { id: 2, liveLink: "https://x.com/i/flow/login?redirect_after_login=%2FAbranova_Real", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/abranovarealestate/?utm_medium=copy_link", icon: "fa-instagram" },
    { id: 4, liveLink: "https://www.youtube.com/channel/UCNKfi3iST64Y8Pafpwx2Kfg", icon: "fa-youtube" }
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
