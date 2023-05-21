import { AiOutlineArrowLeft, AiTwotoneMessage } from "react-icons/ai";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { ImUserPlus } from "react-icons/im";
import ProfileImage from "../assets/profile.jpg";
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
          <div className="button flex">
            <div className="user_add">
              <ImUserPlus />
            </div>
            <p>Add Friend</p>
          </div>
          <div className="button flex message">
            <div className="user_add">
              <AiTwotoneMessage className="message_icon" />
            </div>
            <p>Message</p>
          </div>
          <div className="dot_button">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriptiRoy;
