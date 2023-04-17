import { Backdrop } from "@mui/material";
import projectAPI from "API/projectAPI";
import { Drawer } from "antd";
import FormCreateTask from "components/form/FormCreateTask";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import { TOAST_TYPE } from "constants";
import { STATUS_CODE } from "constants";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { fetchPriorityList } from "thunks/priorityThunk";
import { fetchProjectCategory } from "thunks/projectCategoryThunk";
import { fetchAllProject } from "thunks/projectThunk";
import { fetchStatusList } from "thunks/statusThunk";
import { fetchTaskList } from "thunks/taskThunk";
import { fetchUserListByProjectId } from "thunks/userThunk";
import { toastMessage } from "utils";

function ModalCreateTask(props) {
  const { openDrawer, onClose } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedProjectId = useSelector((state) => state.project.selectedProjectId);
  const dispatch = useDispatch();

  const successMessage = toastMessage("Create Task successfully", TOAST_TYPE.SUCCESS);
  const {taskList} = useSelector(state=>state.task)
  console.log("file: ModalCreateTask.jsx:29 ~ taskList:", taskList)

  async function handleSubmitTask(values) {
    try {
      setIsSubmitting(true);
      const res = await projectAPI.createTask(values);

      const { statusCode } = res.data;
      const { SUCCESS } = STATUS_CODE;
      if (statusCode === SUCCESS) {
        setIsSubmitting(false);
        successMessage();
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);

      const { content, statusCode } = error.response.data;
      const { ERROR_UNAUTHORIZE, ERROR_FORBIDDEN, ERROR_SERVER, ERROR_NOTFOUND } = STATUS_CODE;

      switch (statusCode) {
        case ERROR_UNAUTHORIZE:
        case ERROR_FORBIDDEN:
        case ERROR_SERVER:
        case ERROR_NOTFOUND:
          Swal.fire({
            title: "Oops...",
            text: { content },
            icon: "error",
          });
          break;

        default:
          break;
      }
    }
  }

  useEffect(() => {
    dispatch(fetchProjectCategory());
    dispatch(fetchPriorityList());
    dispatch(fetchStatusList());
    dispatch(fetchAllProject());
    dispatch(fetchTaskList());

  }, [openDrawer]);


  useEffect(() => {
    dispatch(fetchUserListByProjectId(selectedProjectId));
  }, [selectedProjectId]);

  return (
    <>
      <Drawer size="large" title="Create Task" open={openDrawer} closable={false} onClose={onClose}>
        <FormCreateTask onSubmit={handleSubmitTask} onClose={onClose} />
      </Drawer>

      {isSubmitting && (
        <Backdrop>
          <LoadingCircle />
        </Backdrop>
      )}

      {successMessage && <ToastContainer />}
    </>
  );
}

export default ModalCreateTask;
