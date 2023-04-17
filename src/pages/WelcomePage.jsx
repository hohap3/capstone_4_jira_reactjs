import React from "react";
import { Outlet } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default WelcomePage;
