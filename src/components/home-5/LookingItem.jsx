import { Link } from "react-router-dom";
import find from "../../data/find";

const LookingItem = () => {
  return (
    <>
      {find.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <div className="icon_home5">
            <div className="icon">
              <Link to="/listing-grid-v1">
                <span className={item.icon}></span>
                <p>{item.title}</p>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default LookingItem;
