import React from "react";
import { getLoginInfo } from "utils";

function HeaderMain(props) {
  const { currentPosition } = props;

  const { name } = getLoginInfo();

  return (
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 px-0" style={{ backgroundColor: "white" }}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">{name}</li>
          <li className="breadcrumb-item active capitalize" aria-current="page">
            {currentPosition}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default HeaderMain;
