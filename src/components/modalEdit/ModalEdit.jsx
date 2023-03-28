import { Backdrop } from "@mui/material";
import { Drawer } from "antd";
import projectAPI from "API/projectAPI";
import FormUpdate from "components/form/FormUpdate";
import LoadingCircle from "components/loadingCircle/LoadingCircle";

import { STATUS_CODE } from "constants";
import { VALUES_PROJECT_UPDATE } from "constants";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { resetSelectedProject, updateProjectList } from "reduxs/Slice/projectSlice";
import Swal from "sweetalert2";

function ModalEdit(props) {
  const dispatch = useDispatch();

  const [placement, setPlacement] = useState("left");
  const [loading, setLoading] = useState();

  const { openDrawer, projectDetail } = props;

  function handleClose() {
    dispatch(resetSelectedProject());
  }

  const successMessage = () =>
    toast.success("Update project successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });

  async function handleSubmitForm(values, index) {
    try {
      // map data
      const newValues = { ...values };

      for (const key of Object.keys(newValues)) {
        if (!VALUES_PROJECT_UPDATE.includes(key)) delete newValues[key];
      }

      setLoading(true);

      const res = await projectAPI.updateProjectById(newValues.id, newValues);

      const { statusCode } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        setLoading(false);
        dispatch(updateProjectList({ index, values }));
        successMessage();
      }
    } catch (error) {
      const { content, statusCode } = error.response.data;

      setLoading(false);
      switch (statusCode) {
        case STATUS_CODE.ERROR_FORBIDDEN: {
          Swal.fire({
            icon: "error",
            title: `Oops...`,
            text: `${content}`,
          });
          break;
        }
        default:
          break;
      }
    }
  }

  return (
    <>
      <Drawer
        title={`Edit Project`}
        closable={false}
        open={openDrawer}
        key={placement}
        onClose={handleClose}
        size="large"
      >
        <div className="modalEdit__content">
          <FormUpdate onSubmit={handleSubmitForm} values={projectDetail} />
        </div>
      </Drawer>

      {successMessage && <ToastContainer />}
      <Backdrop open={loading}>
        <LoadingCircle />
      </Backdrop>
    </>
  );
}

export default ModalEdit;
