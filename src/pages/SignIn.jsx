import { Backdrop, Button, CircularProgress } from "@mui/material";
import FormSignIn from "components/form/FormSignIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "thunks/userThunk";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignIn() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.userLogin);
  const isLoading = useSelector((state) => state.user.isLoading);

  const timeoutId = useRef();

  const successMessage = () =>
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });

  function submitForm(values) {
    dispatch(fetchSignIn(values));
    successMessage();
  }

  useEffect(() => {
    if (userLogin) {
      timeoutId.current = setTimeout(() => {
        window.location.pathname = "/admin/projectManager";
      }, 2500);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  return (
    <section className="signIn">
      <h2 className="text-3xl capitalize text-center mb-8">Sign In</h2>
      <div className="my-2">
        <FormSignIn onSubmit={submitForm} />
      </div>

      <div className="signIn__socials flex justify-center gap-0">
        <Button variant="text">
          <FacebookIcon />
        </Button>

        <Button variant="text">
          <TwitterIcon />
        </Button>
      </div>

      <div className="flex justify-end mt-5">
        <Link to="/signUp">Don't have an account? Sign up here!</Link>
      </div>

      <Backdrop open={isLoading} sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {userLogin && <ToastContainer />}
    </section>
  );
}

export default SignIn;
