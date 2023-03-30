import { Backdrop } from "@mui/material";
import projectAPI from "API/projectAPI";
import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import FormCreate from "components/form/FormCreate";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import { STATUS_CODE } from "constants";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { resetCategoryProjectList } from "reduxs/Slice/projectCategorySlice";
import Swal from "sweetalert2";
import { fetchProjectCategory } from "thunks/projectCategoryThunk";

function CreateProjectPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const pathURL = window.location.pathname.split("/")[2];

  const notifyMessage = () =>
    toast.success("Create Project successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    dispatch(fetchProjectCategory());

    // reset state when user leave page
    return () => {
      dispatch(resetCategoryProjectList());
    };
  }, []);

  async function handleSubmit(values) {
    try {
      setLoading(true);

      const res = await projectAPI.createProjectAuthorize(values);

      if (res.data.statusCode === STATUS_CODE.SUCCESS) {
        console.log(res.data.statusCode);
        setLoading(false);
        notifyMessage();
      }
    } catch (error) {
      console.log(error);
      const { content, statusCode } = error.response.data;
      setLoading(false);

      switch (statusCode) {
        case STATUS_CODE.ERROR_SERVER: {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${content}`,
          });
          break;
        }
        case STATUS_CODE.ERROR_UNAUTHORIZE: {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Unauthorize Account!`,
          });
          break;
        }
        default:
          break;
      }
    }
  }

  return (
    <section className="setting flex-1 h-screen overflow-y-scroll">
      <div className="setting__content px-[2%] flex flex-col mx-auto">
        <HeaderMain currentPosition={pathURL} />

        <h2 className="text-[1.4rem] font-medium">Create Project</h2>

        <div className="setting__form">
          <FormCreate onSubmit={handleSubmit} />

          <Backdrop open={loading}>
            <LoadingCircle />
          </Backdrop>

          <ToastContainer />
        </div>
      </div>
    </section>
  );
}

export default CreateProjectPage;
