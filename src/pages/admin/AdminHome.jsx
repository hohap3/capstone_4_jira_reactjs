import React from "react";
import "../styles/adminHome.scss";

function AdminHome(props) {
  return (
    <div className="main">
      <div className="header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
            <li className="breadcrumb-item">Project</li>
            <li className="breadcrumb-item">CyberLearn</li>
            <li className="breadcrumb-item active" aria-current="page">
              Cyber Board
            </li>
          </ol>
        </nav>
      </div>
      <h3 className="text-2xl font-medium">Cyber Board</h3>
      <div className="info items-center" style={{ display: "flex" }}>
        <div className="search-block flex items-center gap-2">
          <input className="search" placeholder="Search something..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src="./assets/img/download (1).jfif" alt />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (2).jfif" alt />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (3).jfif" alt />
          </div>
        </div>
        <div style={{ marginLeft: 20 }} className="text-sm">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text-sm">
          Recently Updated
        </div>
      </div>
      <div className="content" style={{ display: "flex" }}>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">BACKLOG 3</div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              data-toggle="modal"
              data-target="#infoModal"
              style={{ cursor: "pointer" }}
            >
              <p>Each issue has a single reporter but can have multiple assignees</p>
              <div className="block" style={{ display: "flex" }}>
                <div className="block-left">
                  <i className="fa fa-bookmark" />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group" style={{ display: "flex" }}>
                    <div className="avatar">
                      <img src="./assets/img/download (1).jfif" alt />
                    </div>
                    <div className="avatar">
                      <img src="./assets/img/download (2).jfif" alt />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <p>Each issue has a single reporter but can have multiple assignees</p>
              <div className="block" style={{ display: "flex" }}>
                <div className="block-left">
                  <i className="fa fa-check-square" />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group" style={{ display: "flex" }}>
                    <div className="avatar">
                      <img src="./assets/img/download (1).jfif" alt />
                    </div>
                    <div className="avatar">
                      <img src="./assets/img/download (2).jfif" alt />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">SELECTED FOR DEVELOPMENT 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">IN PROGRESS 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: "17rem", height: "25rem" }}>
          <div className="card-header">DONE 3</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
