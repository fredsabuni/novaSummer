

import {useNavigate} from 'react-router-dom';


const SimpleFilter = () => {
  const navigate = useNavigate();
  return (
    <ul className="h1ads_1st_list mb0 text-center">
        
      <li className="list-inline-item">
        <div className="search_option_button">
          <button
            onClick={() => navigate("/contact")}
            type="submit"
            className="btn btn-thm"
          >
            Enquire Now
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default SimpleFilter;
