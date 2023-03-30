import MenuAdmin from "components/menu/Menu";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

function LayoutAdmin(props) {
  const { children } = props;

  return (
    <>
      <div className="jira">
        {/* Sider Bar  */}

        <Sidebar />
        {/* Menu */}
        <MenuAdmin />

        {children}
      </div>
    </>
  );
}

export default LayoutAdmin;
