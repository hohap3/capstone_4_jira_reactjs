import Sidebar from "components/Sidebar/Sidebar";
import MenuAdmin from "components/menu/Menu";
import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { checkLoginDefault } from "utils";
import { getAccessToken } from "utils";

function LayoutAdmin(props) {
  const { children } = props;
  const access_token = getAccessToken();
  const loginUser = checkLoginDefault();
  const timeInterval = useRef();

  useEffect(() => {
    if (!access_token && !loginUser) {
      Swal.fire({
        title: "You need to log in!",
        html: "You will return sign in page after <b></b> milliseconds",
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
          window.location.pathname = "/signIn";
        }
      });
    }
  }, []);

  return (
    <>
      <div className="jira">
        {/* Sider Bar */}
        <Sidebar />
        {/* Menu */}
        <MenuAdmin />
        {children}
      </div>
    </>
  );
}

export default LayoutAdmin;
