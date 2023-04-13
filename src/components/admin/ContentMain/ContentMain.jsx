import ModalEdit from "layouts/ModalEdit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModal } from "reduxs/Slice/taskSlice";
import { fetchCommentList } from "thunks/commentThunk";
import { fetchTaskDetail } from "thunks/projectThunk";
function ContentMain(props) {
  const {projectDetailById} = useSelector((state) => state.project);
  const {isOpen} = useSelector((state) => state.task);
  const dispatch = useDispatch()
  const handleOpenModal = (id) => {
    dispatch(ToggleModal(true))
    dispatch(fetchTaskDetail(id))
    dispatch(fetchCommentList(id));

  };

  function renderCardList() {
    if (!projectDetailById) return;
    const color = "px-[10px] py-[2px] rounded-lg text-[12px]";
    return <>
      {projectDetailById?.lstTask?.map((taskListDetail, idx) => (
        <div key={idx} className="card" style={{ width: "17rem", height: "auto" }}>
          <div className="card-header text-sm">{taskListDetail.statusName}</div>
          <ul className="list-group list-group-flush">
            {taskListDetail.lstTaskDeTail?.map((task, index) => (
              <li
                className="list-group-item"
                data-toggle="modal"
                data-target="#infoModal"
                style={{ cursor: "pointer" }}
                key={index}
                onClick={()=>handleOpenModal(task.taskId)}
              >
                <p className="font-bold">{task.taskName}</p>
                <div className="block" style={{ display: "flex" }}>
                  <div className="block-left flex gap-1 items-center">
                    <p>
                      {task.priorityTask.priority.toLowerCase() === "medium" ? (
                        <span className={` bg-green-300 ${color}`}>Medium</span>
                      ) : task.priorityTask.priority.toLowerCase() === "lowest" ? (
                        <span className={` bg-green-300 ${color}`}>Lowest</span>
                      ) : task.priorityTask.priority.toLowerCase() === "low" ? (
                        <span className={` bg-orange-300 ${color}`}>Low</span>
                      ) :(
                        <span className={` bg-red-300 ${color}`}>High</span>
                      )}
                    </p>
                  
                  </div>
                  <div className="block-right">
                    <div className="avatar-group" style={{ display: "flex" }}>
                      {projectDetailById.members?.map((mem, index) => (
                        <div className="avatar" key={index}>
                          <img src={mem.avatar} alt={mem.avatar} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ModalEdit handleToggle={isOpen} ></ModalEdit>
    </>;
  }

  return (
    <div className="content" style={{ display: "flex" }}>
      {renderCardList()}
    </div>
  );
}

export default ContentMain;
