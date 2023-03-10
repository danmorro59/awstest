import Thumbnail from "./Thumbnail.jsx";
import MenuPopup from "./MenuPopup.jsx";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

const Dismissible = ({
  video_link,
  username,
  title,
  views,
  date_published,
  runtime,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleClick = () => {};
  return (
    <div
      className="dismissible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Thumbnail video_link={video_link} runtime={runtime} />
      <div className="details">
        <p className="video-title">{title}</p>
        <div className="user_name">{username}</div>
        <div className="metadata-line">
          <p>{views >= 1000 ? `${views / 1000}K` : views} views</p>
          <p> · </p>
          <p>{DateTime.fromISO(date_published).toRelative()}</p>
        </div>
      </div>
      <button className={isVisible ? "menu-popup-btn" : "hidden"}>
        <svg
          className="three-dots"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          fill="currentColor"
        >
          <g>
            <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
          </g>
        </svg>
      </button>
      <MenuPopup />
    </div>
  );
};

export default Dismissible;
