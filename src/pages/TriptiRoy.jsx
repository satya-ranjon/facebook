import { AiOutlineArrowLeft, AiTwotoneMessage } from "react-icons/ai";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { ImUserPlus } from "react-icons/im";
import ProfileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
// import infoImg from "../assets/info.png";
import infoImg1 from "../assets/info1.png";

const TriptiRoy = () => {
  return (
    <div>
      <div className="navbar">
        <div className="box">
          <AiOutlineArrowLeft />
          <h5 className="profile_name">Tripti Roy</h5>
        </div>
        <div className="search_icon">
          <BsSearch />
        </div>
      </div>
      <div className="profile_background">
        <div className="profile_picture">
          <img src={ProfileImage} alt="TriptiRoy" />
        </div>
      </div>
      <div className="container">
        <h4>Tripti Roy</h4>
        <div className="profile_options flex">
          <Link to="/login">
            <button className="button flex">
              <div className="user_add">
                <ImUserPlus />
              </div>
              <p>Add Friend</p>
            </button>
          </Link>
          <Link to="/login">
            <button className="button flex message">
              <div className="user_add">
                <AiTwotoneMessage className="message_icon" />
              </div>
              <p>Message</p>
            </button>
          </Link>

          <div className="dot_button">
            <BsThreeDots />
          </div>
        </div>
        <div className="informations">
          <img src={infoImg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TriptiRoy;
