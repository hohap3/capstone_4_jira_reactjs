import { Button } from "@mui/material";
import FormSignIn from "components/form/FormSignIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchSignIn } from "thunks/userThunk";

function SignIn() {
  const dispatch = useDispatch();
  async function submitForm(values) {
    try {
      dispatch(fetchSignIn(values));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="signI">
      <div className="signIn__container container mx-auto w-[1368px]">
        <div className="signIn__content flex">
          <div className="signIn__image hidden w-[60%] md:block">
            <img
              src={`https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w`}
              className="w-full h-[100vh]"
            />
          </div>
          <div className="signIn__auth w-[40%] flex flex-col gap-6 justify-center px-[2rem] bg-slate-50">
            <h2 className="text-3xl capitalize text-center ">Sign In</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
