import { authHOC } from "HOCS/authHOC";
import SignIn from "pages/SignIn";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const SignInHOC = authHOC(SignIn);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignInHOC />} />
      </Routes>
    </div>
  );
}

export default App;
