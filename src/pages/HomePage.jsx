import React from "react";
import { Outlet } from "react-router";

function HomePage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default HomePage;
