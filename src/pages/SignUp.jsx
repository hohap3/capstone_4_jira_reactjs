import userAPI from "API/userAPI";
import FormSignUp from "components/form/FormSignUp";
import { VALUES_REGISTER } from "constants";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess, resetRegister } from "reduxs/Slice/userSlice";
import { Backdrop, CircularProgress } from "@mui/material";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutId = useRef();

  const hasRegister = useSelector((state) => state.user.hasRegister);

  const successMessage = () =>
    toast.success("Sign Up Successful!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });

  async function submitForm(values) {
    try {
      // filter data
      const newValues = { ...values };

      for (const key of Object.keys(newValues)) {
        if (!VALUES_REGISTER.includes(key)) delete newValues[key];
      }

      setIsLoading(true);

      await userAPI.signUp(newValues);

      dispatch(registerSuccess());
      setIsLoading(false);
      successMessage();
    } catch (error) {
      const { message } = error.response.data;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
      });
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (hasRegister) {
      timeoutId.current = setTimeout(() => {
        dispatch(resetRegister());
        navigate("/");
      }, 2500);
    }
  });

  return (
    <section className="signUp">
      <h2 className="text-3xl capitalize text-center">Sign Up</h2>
      <div className="my-4">
        <FormSignUp onSubmit={submitForm} />
      </div>

      <div className="flex justify-end mt-5">
        <Link to="/">Already have an account? Sign in here!</Link>
      </div>

      <Backdrop open={isLoading} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {successMessage && <ToastContainer />}
    </section>
  );
}

export default SignUp;
