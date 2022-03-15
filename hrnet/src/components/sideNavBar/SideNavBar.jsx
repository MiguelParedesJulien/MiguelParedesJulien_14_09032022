import "components/sideNavBar/sideNavBar.css";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoDark from "assets/img/logo/logo_hrnet.png";
import PropTypes from "prop-types";
import React from "react";
import user from "assets/img/icon/user.webp";

const SideNavBar = (props) => {
  return (
    <div className={`sideBarOverlay ${props.showSideBar ? "showOverlay" : "hideOverlay"} `} onClick={props.toggle}>
      <aside className={`sideBar ${props.showSideBar ? "showSideBar" : "hideSideBar"} `} onClick={(e) => e.stopPropagation()}>
        <Link to="/" className="sideBarHeader">
          <img src={logoDark} alt="sideBarLogo" className="sideBarLogo"></img>
          <h2 className="sideBarTitle">HRnet</h2>
          <div className="line" />
        </Link>
        <nav className="sideBarMenu">
          <article className="sideBarInfoUser">
            <img src={user} alt="userProfileImage" className="sideBarUserImg"></img>
            <Link to="/" className="sideBarUserName">
              <h3>V</h3>
            </Link>
          </article>
          <br />
          <ul className="sideBarNav" role="menu">
            <li className="sideBarNavItem">
              <Link to="./" className="sideBarNavLink">
                <FaUserPlus />
                <p>New Employee</p>
              </Link>
            </li>
            <br />
            <div className="line" />
            <li className="sideBarNavItem">
              <Link to="/employee-list" className="sideBarNavLink">
                <FaUsers />
                <p>Employees List</p>
              </Link>
            </li>
          </ul>
        </nav>
        <section className="sideNavBarFooter">
          <h2>HRnet © 2022</h2>
          <p>All right reserved.</p>
          <Link to="/" className="privacyPolicy">
            Privacy Policy
          </Link>
        </section>
      </aside>
    </div>
  );
};

SideNavBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideNavBar;
