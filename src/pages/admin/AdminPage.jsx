import LayoutAdmin from "layouts/LayoutAdmin";
import React from "react";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <LayoutAdmin>
      <Outlet />
    </LayoutAdmin>
  );
}

export default AdminPage;
