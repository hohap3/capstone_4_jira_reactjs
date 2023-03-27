import ContentMain from "components/admin/ContentMain/ContentMain";
import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import InfoMain from "components/admin/InfoMain/InfoMain";
import React from "react";
import { getLoginInfo } from "utils";
import "../styles/adminHome.scss";

function AdminHome(props) {
  const pathURL = window.location.pathname.split("/")[2];

  const { name } = getLoginInfo();

  return (
    <div className="main">
      <HeaderMain currentPosition={pathURL} />
      <h3 className="text-2xl font-medium">{name} Board</h3>
      <InfoMain />
      <ContentMain />
    </div>
  );
}

export default AdminHome;
