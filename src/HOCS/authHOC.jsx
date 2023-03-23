import { ACCESS_TOKEN } from "constants";
import LayoutAuth from "layouts/LayoutAuth";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function authHOC(WrapComponent) {
  return function () {
    const userLogin = useSelector((state) => state.user.userLogin);
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN)) ?? {};

    const { access_token } = accessToken;

    const timeInterval = useRef();
    const navigate = useNavigate();

    // Check if user logged in , then we redirect to admin page
    useEffect(() => {
      if (userLogin || access_token) {
        Swal.fire({
          title: "You has been logged in!",
          html: "You will return admin page after <b></b> milliseconds",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timeInterval.current = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timeInterval.current);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate("/admin");
            console.log("Has returned to admin page");
          }
        });
      }
    }, []);

    return (
      <>
        <LayoutAuth>
          <WrapComponent />
        </LayoutAuth>
      </>
    );
  };
}
