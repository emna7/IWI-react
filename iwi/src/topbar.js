import "./topbar.css";
import { Search, Notifications } from "@material-ui/icons";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">IWI</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a gig, a club or an event"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Profile</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
