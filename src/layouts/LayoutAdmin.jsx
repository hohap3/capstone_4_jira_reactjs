import React from "react";
import "./styles/layoutAdmin.scss";

function LayoutAdmin(props) {
  const { children } = props;

  return (
    <>
      <div className="jira">
        {/* Sider Bar  */}
        <div className="sideBar">
          <div className="sideBar-top">
            <div className="sideBar-icon">
              <i className="fab fa-jira" />
            </div>
            <div
              className="sideBar-icon"
              data-toggle="modal"
              data-target="#searchModal"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-search" />
              <span className="title">SEARCH ISSUES</span>
            </div>
            <div className="sideBar-icon">
              <i className="fa fa-plus" />
              <span className="title">CREATE ISSUES</span>
            </div>
          </div>
          <div className="sideBar-bottom">
            <div className="sideBar-icon">
              <i className="fa fa-question-circle" />
              <span className="title">ABOUT</span>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="menu">
          <div className="account">
            <div className="avatar">
              <img src="./assets/download.jfif" alt />
            </div>
            <div className="account-info">
              <p>CyberLearn.vn</p>
              <p>Report bugs</p>
            </div>
          </div>
          <div className="control">
            <div>
              <i className="fa fa-credit-card" />
              <span>Cyber Board</span>
            </div>
            <div>
              <i className="fa fa-cog" />
              <span>Project Settings</span>
            </div>
          </div>
          <div className="feature">
            <div>
              <i className="fa fa-truck" />
              <span>Releases</span>
            </div>
            <div>
              <i className="fa fa-equals" />
              <span>Issues and filters</span>
            </div>
            <div>
              <i className="fa fa-paste" />
              <span>Pages</span>
            </div>
            <div>
              <i className="fa fa-location-arrow" />
              <span>Reports</span>
            </div>
            <div>
              <i className="fa fa-box" />
              <span>Components</span>
            </div>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}

export default LayoutAdmin;
