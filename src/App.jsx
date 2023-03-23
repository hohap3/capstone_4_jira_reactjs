import { authHOC } from "HOCS/authHOC";
import AdminPage from "pages/admin/AdminPage";
import NotFound from "pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { clientRoutes, adminRoutes } from "routes/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {clientRoutes?.map(({ path, component: Component, children }, idx) => (
          <Route key={idx} path={path} element={<Component />}>
            {children?.map(({ path, component: ChildComponent, index }, idx) => {
              const AuthComponentHOC = authHOC(ChildComponent);
              return (
                <Route key={idx} index={index} path={path} element={<AuthComponentHOC />}></Route>
              );
            })}
          </Route>
        ))}

        {adminRoutes?.map(({ path, component: Component, children }, idx) => (
          <Route key={idx} path={path} element={<Component />}>
            {children?.map(({ path, component: ChildComponent, index }, idx) => (
              <Route key={idx} path={path} element={<ChildComponent />} index={index}></Route>
            ))}
          </Route>
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
