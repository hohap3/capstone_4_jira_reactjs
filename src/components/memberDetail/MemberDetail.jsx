import { Button } from "@mui/material";
import { Avatar } from "antd";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import projectAPI from "API/projectAPI";
import { STATUS_CODE } from "constants";
import { useDispatch } from "react-redux";
import { toastMessage } from "utils";
import { TOAST_TYPE } from "constants";
import { fetchAllProject } from "thunks/projectThunk";
import Swal from "sweetalert2";

function MemberDetail({ member, projectId }) {
  const dispatch = useDispatch();
  const { userId, name, avatar } = member;

  function handleRemoveMember() {
    // try {
    //   const data = { projectId, userId };
    //   const res = await projectAPI.removeUserFromProject(data);
    //   const { statusCode } = res.data;
    //   if (statusCode === STATUS_CODE.SUCCESS) {
    //     const successMessage = toastMessage(
    //       `Remove member ${name} successfully!`,
    //       TOAST_TYPE.SUCCESS
    //     );
    //     successMessage();
    //     dispatch(fetchAllProject());
    //   }
    // } catch (error) {
    //   console.log(error);
    //   const { message, content } = error.response.data;
    //   const errorMessage = toastMessage(content, TOAST_TYPE.ERROR);
    //   Swal.fire({
    //     title: `Oops...`,
    //     icon: "error",
    //     text: `${message}`,
    //   });
    //   errorMessage();
    // }

    Swal.fire({
      title: `Do you want to remove member ${name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, remove member ${name}!`,
    }).then(async (result) => {
      try {
        const data = { projectId, userId };
        if (result.isConfirmed) {
          const res = await projectAPI.removeUserFromProject(data);
          const { statusCode } = res.data;
          if (statusCode === STATUS_CODE.SUCCESS) {
            const successMessage = toastMessage(
              `Remove member ${name} successfully!`,
              TOAST_TYPE.SUCCESS
            );
            successMessage();
            dispatch(fetchAllProject());
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: `Remove member ${name} has failed`,
            icon: "warning",
          });
        }
      } catch (error) {
        console.log(error);
        const { message, content } = error.response.data;
        const errorMessage = toastMessage(content, TOAST_TYPE.ERROR);
        Swal.fire({
          title: `Oops...`,
          icon: "error",
          text: `${message}`,
        });
        errorMessage();
      }
    });
  }

  return (
    <section className="flex items-center gap-4">
      <div>
        <Avatar src={avatar} />
      </div>
      <h3 className="flex-1">{name}</h3>

      <Button onClick={handleRemoveMember} title={`Remove member ${name}`} sx={{ color: "red" }}>
        <DeleteIcon />
      </Button>
    </section>
  );
}

export default MemberDetail;
