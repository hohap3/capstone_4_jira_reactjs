import { authHOC } from "HOCS/authHOC";
import AdminHome from "pages/admin/AdminHome";
import AdminPage from "pages/admin/AdminPage";

import NotFound from "pages/NotFound";
import React, { Component, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes/routes";

import "./App.css";

function App() {
  const pathName = window.location.pathname;

  useEffect(() => {
    function setDefaultURL() {
      if (pathName === "/") window.location.pathname = "/signIn";
    }

    setDefaultURL();
  }, [pathName]);

  return (
    <div className="App">
      {pathName === "/signIn" || pathName === "/signUp" ? (
        <Routes>
          {clientRoutes?.map(({ path, component: Component }, idx) => {
            const AuthComponentHOC = authHOC(Component);
            return <Route key={idx} path={path} element={<AuthComponentHOC />} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/admin" element={<AdminPage />}>
            {adminRoutes?.map(({ path, component: Component }, idx) => (
              <Route key={idx} path={path} element={<Component />}></Route>
            ))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
