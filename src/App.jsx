import { authHOC } from "HOCS/authHOC";

import NotFound from "pages/NotFound";
import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { clientRoutes } from "routes/routes";

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
      <Routes>
        {clientRoutes?.map(({ path, component: Component }, idx) => {
          const AuthComponentHOC = authHOC(Component);
          return <Route key={idx} path={path} element={<AuthComponentHOC />} />;
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
