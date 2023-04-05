import { USER_LOGIN } from "constants";
import LayoutAuth from "layouts/LayoutAuth";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getAccessToken } from "utils";

export function authHOC(WrapComponent) {
  return function () {
    const userLogin = useSelector((state) => state.user.userLogin);
    const access_token = getAccessToken();
    const user_login = localStorage.getItem(USER_LOGIN) ?? {};
    const timeInterval = useRef();

    // Check if user logged in , then we redirect to admin page
    useEffect(() => {
      if (userLogin || (access_token && user_login)) {
        Swal.fire({
          title: "You have been logged in!",
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
            window.location.pathname = "/admin/projectManager";
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
