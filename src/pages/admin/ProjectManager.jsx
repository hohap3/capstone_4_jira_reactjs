import projectAPI from "API/projectAPI";
import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import ModalEdit from "components/modalEdit/ModalEdit";

import ProjectManagerTable from "components/projectManagerTable/ProjectManagerTable";
import { TOAST_TYPE } from "constants";
import { STATUS_CODE } from "constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { resetAll } from "reduxs/Slice/projectSlice";
import { resetUserList } from "reduxs/Slice/userSlice";
import Swal from "sweetalert2";
import { fetchAllProject } from "thunks/projectThunk";
import { fetchUserList } from "thunks/userThunk";
import { toastMessage } from "utils";

function ProjectManager() {
  const selectedProject = useSelector((state) => state.project.selectedProject);

  const dispatch = useDispatch();

  const pathURL = window.location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(fetchAllProject());
    dispatch(fetchUserList());

    return () => {
      dispatch(resetAll());
      dispatch(resetUserList());
    };
  }, []);

  const successToastMessage = toastMessage("Add new user successfully", TOAST_TYPE.SUCCESS);

  // handle assign user project
  async function handleAssignUser(values) {
    try {
      const res = await projectAPI.assignUserProject(values);

      const { statusCode } = res.data;

      if (statusCode === STATUS_CODE.SUCCESS) {
        dispatch(fetchAllProject());
        successToastMessage();
      }
    } catch (error) {
      console.log(error);
      const { statusCode, content, message } = error.response.data;
      const errorToastMessage = toastMessage(content, TOAST_TYPE.ERROR);

      const { ERROR_FORBIDDEN } = STATUS_CODE;

      switch (statusCode) {
        case ERROR_FORBIDDEN:
          Swal.fire({
            title: `Error ${ERROR_FORBIDDEN} :  ${content}`,
            text: `${message}`,
            icon: "error",
          });
          break;

        default:
          break;
      }

      errorToastMessage();
    }
  }

  // handle remove project
  function handleRemoveProject(record) {
    const { projectName, id } = record;

    Swal.fire({
      title: `Do you want to remove ${projectName}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const res = await projectAPI.removeProjectById(id);

          const { statusCode } = res.data;

          if (statusCode === STATUS_CODE.SUCCESS) {
            dispatch(fetchAllProject());
            Swal.fire("Deleted!", `Project name ${projectName} has been removed`, "success");
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: `Oops...`,
            icon: "error",
            text: `Project name ${projectName} hasn't been removed!`,
          });
        }
      } catch (error) {
        const { statusCode, content } = error.response.data;

        switch (statusCode) {
          case STATUS_CODE.ERROR_FORBIDDEN:
          case STATUS_CODE.ERROR_NOTFOUND: {
            Swal.fire({
              title: `Oops...`,
              icon: "error",
              text: `${content}`,
            });
            break;
          }
          default:
            break;
        }
      }
    });
  }

  return (
    <section className="projectManager flex-1 h-screen overflow-y-scroll">
      <div className="projectManager__content px-[2%] flex flex-col mx-auto">
        <HeaderMain currentPosition={pathURL} />

        <h2 className="text-[1.4rem] font-medium">Project Manager</h2>

        <ProjectManagerTable onAddUser={handleAssignUser} onRemoveProject={handleRemoveProject} />
      </div>

      {selectedProject && (
        <ModalEdit openDrawer={!!selectedProject} projectDetail={selectedProject} />
      )}
      {successToastMessage && <ToastContainer />}
    </section>
  );
}

export default ProjectManager;
