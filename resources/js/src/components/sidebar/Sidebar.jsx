import { Link } from "react-router-dom";
import "./sidebar.css";
import background from "../../images/pool.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT LUNAMAR</span>
        <img src={background} alt="" />
        <p>
          Lunamar is a huge subdivision which has 50+ buildings. In 2021, it
          completed it's 10th anniversary. This online portal is it's pilot
          version.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Services We Offer</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/login">
              Building Management
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/login">
              Apartment Management
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/login">
              Visitors Management
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/login">
              Surrounding Management
            </Link>
          </li>
          {/* <li className="sidebarListItem">
            <Link className="link" to="/login">
              Pool
            </Link>
          </li> */}
          {/* <li className="sidebarListItem">
            <Link className="link" to="/login">
              Garden
            </Link>
          </li> */}
          {/* <li className="sidebarListItem">
            <Link
              to={{ pathname: "http://fxb0881.uta.cloud/blog" }}
              target="_blank"
              className="link"
            >
              Read Our Blog
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
