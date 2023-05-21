import { AiOutlineArrowLeft, AiTwotoneMessage } from "react-icons/ai";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { ImUserPlus } from "react-icons/im";
import ProfileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import home from "../assets/icon/home.png";
import location from "../assets/icon/location.png";
import love from "../assets/icon/love.png";
import more from "../assets/icon/more.png";
import study from "../assets/icon/study.png";
import work from "../assets/icon/work.png";
import follower from "../assets/icon/wifi.png";
import docs from "../assets/icon/docs.png";
import lock from "../assets/icon/lock.png";

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
          <div className="info">
            <img src={work} alt="work" />
            <p>
              Works at <Link to="/login">Student</Link>
            </p>
          </div>
          <div className="info">
            <img src={study} alt="work" />
            <p>
              Studied at
              <Link to="/login"> Sonapur Hazi M.S Hoque High School</Link>
            </p>
          </div>
          <div className="info">
            <img src={study} alt="work" />
            <p>
              Studied at
              <Link to="/login"> Dinajpur Govt. Women College, Dinajpur</Link>
            </p>
          </div>
          <div className="info">
            <img src={home} alt="work" />
            <p>
              Lives in <Link to="/login">Thakurgaon, Rājshāhi, Bangladesh</Link>
            </p>
          </div>
          <div className="info">
            <img src={location} alt="work" />
            <p>
              From <Link to="/login"> Baliadangi, Dhaka, Bangladesh</Link>
            </p>
          </div>
          <div className="info">
            <img src={love} alt="work" />
            <p>Single</p>
          </div>
          <div className="info followr">
            <img src={follower} alt="work" />
            <p>
              Followed by <Link to="/login"> 3k people</Link>
            </p>
          </div>
          <div className="info">
            <img src={more} alt="work" />
            <p>
              Add Tripti Roy as a friend to see the details she shares on her
              profile
            </p>
          </div>
        </div>
        <h4 className="friends">Friends</h4>
        <h4 className="posts">Posts</h4>

        <div className="docs">
          <img src={docs} alt="docs" />
          <h4 className="posts">No Posts or Tags</h4>
          <p>Be the first to write or share something</p>
        </div>
      </div>
      <div className="bar"></div>
      <div className="container">
        <div className="lock">
          <img src={lock} alt="" />
          <div className="text_lock">
            <h4 className="posts">Tripti Roy locked her profile</h4>
            <span>
              Only her friends can see what she shares on her profile.{" "}
              <Link to="/login">Learn more</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriptiRoy;
