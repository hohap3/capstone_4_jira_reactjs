import { Drawer } from "antd";
import FormCreateTask from "components/form/FormCreateTask";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPriorityList } from "thunks/priorityThunk";
import { fetchProjectCategory } from "thunks/projectCategoryThunk";
import { fetchTaskList } from "thunks/taskThunk";

function ModalCreateTask(props) {
  const { openDrawer, onClose } = props;
  const dispatch = useDispatch();

  function handleSubmitTask(values) {
    console.log(values);
  }

  useEffect(() => {
    dispatch(fetchProjectCategory());
    dispatch(fetchTaskList());
    dispatch(fetchPriorityList());
  }, []);

  return (
    <>
      <Drawer size="large" title="Create Task" open={openDrawer} closable={false} onClose={onClose}>
        <FormCreateTask onSubmit={handleSubmitTask} />
      </Drawer>
    </>
  );
}

export default ModalCreateTask;
