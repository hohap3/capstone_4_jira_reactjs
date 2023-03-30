import React from "react";

function InfoMain(props) {
  return (
    <div className="info items-center" style={{ display: "flex" }}>
      <div className="search-block flex items-center gap-2">
        <input className="search px-3" placeholder="Search something..." />
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
  );
}

export default InfoMain;
