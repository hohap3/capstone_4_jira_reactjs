import ContentMain from "components/admin/ContentMain/ContentMain";
import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import InfoMain from "components/admin/InfoMain/InfoMain";
import React from "react";
import "../styles/adminHome.scss";

function AdminHome(props) {
  return (
    <div className="main">
      <HeaderMain />
      <h3 className="text-2xl font-medium">Cyber Board</h3>
      <InfoMain />
      <ContentMain />
    </div>
  );
}

export default AdminHome;
