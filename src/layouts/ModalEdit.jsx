import AssignmentIcon from "@mui/icons-material/Assignment";
import PestControlIcon from "@mui/icons-material/PestControl";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, Input } from "@mui/material";
import MyAvatarGroup from "components/avatar/Avatar";
import SliderTimeField from "components/form/form-control/SliderTimeField";
import EditorAdminField from "components/form/form-control/admin/EditorAdminField";
import InputAdminField from "components/form/form-control/admin/InputAdminField";
import MyModal from "components/modal/Modal";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactHtml from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ToggleModal, changeTask } from "reduxs/Slice/taskSlice";
import { insertComment, updateComment, deleteComment } from "thunks/commentThunk";
import { getLoginInfo } from "utils";
import { ToastContainer, toast } from "react-toastify";
import { updateTask } from "thunks/taskThunk";

const ModalEdit = () => {
  const { name } = getLoginInfo();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { isOpen, taskDetailModal, taskList } = useSelector((state) => state.task);
  const { statusList } = useSelector((state) => state.status);
  const { commentList } = useSelector((state) => state.comment);
  const { priorityList } = useSelector((state) => state.priority);
  const userList = useSelector((state) => state.user.userListByProject);
  const [editDesc, setEditDesc] = useState(false);
  const [editTaskName, setEditTaskName] = useState(false);
  const [editComment, setEditComment] = useState({
    isOpen: false,
    id: null,
  });
  const [commentValue, setCommentValue] = useState({ contentComment: "" });
  const [timeTracking, setTimeTracking] = useState({
    timeTrackingSpent: taskDetailModal.timeTrackingSpent,
    timeTrackingRemaining: taskDetailModal.timeTrackingRemaining,
  });
  useEffect(() => {
    dispatch(updateTask(taskDetailModal))
  }, [taskDetailModal])
  
  const { register, handleSubmit, control } = useForm();
  const handleClose = () => {
    dispatch(ToggleModal(false));
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2c3e50" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  const options = [];
  statusList.forEach((item) => {
    options.push({
      value: item.statusId,
      label: item.statusName,
    });
  });
  const optionsPriorityList = [];
  priorityList.forEach((item) => {
    optionsPriorityList.push({
      value: item.priorityId,
      label: item.priority,
    });
  });
  const optionsType = [];
  taskList.forEach((item) => {
    if (item.taskType === "bug") {
      optionsType.push({
        value: item.id,
        label: item.taskType,
        icon: <PestControlIcon />,
      });
    } else {
      optionsType.push({
        value: item.id,
        label: item.taskType,
        icon: <AssignmentIcon />,
      });
    }
  });
  let defaultOption = null;
  if (taskDetailModal?.statusId) {
    defaultOption = options.find((option) => option.value === taskDetailModal.statusId);
  }
  let defaultType = null;
  if (taskDetailModal?.statusId) {
    defaultType = optionsType.find((option) => option.value === taskDetailModal.typeId);
  }
  let defaultPriority = null;
  if (taskDetailModal?.statusId) {
    defaultPriority = optionsPriorityList.find(
      (priorityList) => priorityList.value === taskDetailModal.priorityId
    );
  }

  const renderDescription = () => ReactHtml(taskDetailModal.description);

  const onSubmit = (data) => {
    const { name, value } = data;
    dispatch(changeTask({ name, value }));
    setEditTaskName(false);
  };
  const handleSubmitComment = (data) => {
    dispatch(updateComment(data));
    setEditComment(false);
  };
  const handleInsertComment = (e) => {
    e.preventDefault();
    dispatch(
      insertComment({
        taskId: taskDetailModal.taskId,
        contentComment: commentValue.contentComment,
      })
    );
    setCommentValue({ contentComment: "" });
  };
  const onSubmitDesc = (data) => {
    const { name, value } = data;
    dispatch(changeTask({ name, value }));
    setEditDesc(false);
  };
  // -------------------------MỞ MODAL EDIT-------------------------------
  const handleEditDesc = () => {
    setEditDesc(true);
  };
  const handleCancelUpdateTaskName = () => {
    setEditTaskName(false);
  };
  const handleCancelUpdateDesc = () => {
    setEditDesc(false);
  };
  // ------------------------HỦY UPDATE----------------------------------
  const handleCancelUpdate = () => {
    setEditComment({
      ...editComment,
      isOpen: false,
    });
  };
  const handleEditComment = (id) => {
    setEditComment({
      isOpen: true,
      id,
    });
  };
  const handleDeleteComment = (id) => {
    dispatch(
      deleteComment({
        taskId: taskDetailModal.taskId,
        idComment: id,
        toast,
      })
    );
  };
  // ---------------------SỰ KIỆN ONCHANG LẤY DỮ LIỆU TỪ SELECT---------------------------
  const handleChange = (selectedOption, event, name) => {
    const value = selectedOption.value;
    dispatch(changeTask({ name, value }));
  };
  // ---------------------- SỰ KIỆN ONCHANGE LẤY DỮ LIỆU TỪ TIME
  function handleChangeTime(e) {
    const { name, value } = e.target;
    setTimeTracking((prevState) => ({ ...prevState, [name]: value }));
    dispatch(changeTask({ name, value: parseInt(value, 10) }));
  }
  const formatOptionLabel = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {icon}
      <span>{label}</span>
    </div>
  );

  return (
    <div>
      <MyModal open={isOpen} close={isOpen}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-blue-200 w-[1000px] p-10">
            <div className="modal-header ">
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <Select
                    className="w-[200px] p-2 relative z-[9999]"
                    options={optionsType}
                    styles={customStyles}
                    defaultValue={defaultType}
                    formatOptionLabel={formatOptionLabel}
                    onChange={(selectedOption, event) =>
                      handleChange(selectedOption, event, "typeId")
                    }
                  />
                  {editTaskName === true ? (
                    <div className="relative">
                      <form
                        onSubmit={handleSubmit((data) =>
                          onSubmit({
                            value: inputRef.current.value,
                            name: inputRef.current.name,
                          })
                        )}
                      >
                        <input
                          type="text"
                          defaultValue={taskDetailModal.taskName}
                          className="p-2 outline-none"
                          name="taskName"
                          ref={inputRef}
                        ></input>

                        <div className="flex gap-2 absolute right-0 mt-2">
                          <button
                            className="w-[50px] h-[30px] flex items-center justify-center bg-red-600 text-white"
                            onClick={() => handleCancelUpdateTaskName()}
                          >
                            <CloseIcon />
                          </button>
                          <button
                            type="submit"
                            className="w-[50px] h-[30px] flex items-center justify-center bg-green-600 text-white"
                          >
                            <CheckIcon />
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <span onClick={() => setEditTaskName(true)}>{taskDetailModal?.taskName}</span>
                  )}
                </div>
                <div className="flex gap-5">
                  <button className="flex gap-2 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    Give Feedback
                  </button>
                  <button className="flex gap-2 bg-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      />
                    </svg>
                    Copy link
                  </button>
                  <button onClick={handleClose} className="bg-transparent outline-none border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-body flex gap-10 mt-5">
              <div className="modal-body-left w-[70%]">
                <h3 className="text-[30px]">This is aaaaaa</h3>

                {editDesc === true ? (
                  <>
                    <form
                      onSubmit={handleSubmit((data) =>
                        onSubmitDesc({
                          name: "description",
                          value: data.description,
                        })
                      )}
                    >
                      <EditorAdminField
                        name="description"
                        label="Description"
                        control={control}
                        defaultValue={taskDetailModal.description}
                      />
                      <div className="flex gap-10">
                        <button
                          className="w-[100px] h-[30px] flex items-center justify-center bg-red-600 text-white"
                          onClick={() => handleCancelUpdateDesc()}
                        >
                          Hủy
                        </button>
                        <button
                          type="submit"
                          className="w-[100px] h-[30px] flex items-center justify-center bg-green-600 text-white"
                        >
                          Lưu
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] font-semibold mt-10">Description:</p>
                    <p onClick={() => handleEditDesc()} className="break-words my-3 cursor-pointer">
                      {renderDescription()}
                    </p>
                  </>
                )}
                <p className="text-[15px] font-semibold mt-10">Comment:</p>
                <form className="flex gap-10 items-center mt-5" onSubmit={handleInsertComment}>
                  <img
                    src="https://cdn.tgdd.vn/Files/2022/03/31/1423196/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-202203311033114159.jpg"
                    className="w-[50px] h-[50px] rounded-full"
                    alt="ấ"
                  />
                  <div className="w-full">
                    <textarea
                      className="w-full resize-none outline-none px-5 py-2"
                      placeholder="Thêm 1 bình luận"
                      rows={1}
                      name="contentComment"
                      value={commentValue.contentComment}
                      onChange={(e) =>
                        setCommentValue({ ...commentValue, [e.target.name]: e.target.value })
                      }
                    ></textarea>
                    {commentValue.contentComment !== "" && (
                      <div className="flex gap-2 mt-2 justify-center">
                        <button
                          className="w-[50px] h-[30px] flex items-center justify-center bg-red-600 text-white"
                          onClick={() => handleCancelUpdateTaskName()}
                        >
                          <CloseIcon />
                        </button>
                        <button
                          type="submit"
                          className="w-[50px] h-[30px] flex items-center justify-center bg-green-600 text-white"
                        >
                          <CheckIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </form>
                <div className="comment max-h-[300px] overflow-auto">
                  {commentList?.map((item) =>
                    editComment.isOpen === true &&
                    editComment.id === item.id &&
                    item.user.name === name ? (
                      <div key={item.id} className="flex gap-10 items-center mt-5">
                        <img
                          src={item.user.avatar}
                          className="w-[50px] h-[50px] rounded-full"
                          alt={item.user.name}
                        />
                        <div className="w-full">
                          <form
                            onSubmit={handleSubmit((data) =>
                              handleSubmitComment({
                                id: item.id,
                                contentComment: data.commentContent,
                              })
                            )}
                          >
                            <textarea
                              className="w-full resize-none outline-none px-5 py-2"
                              placeholder="Cập nhật bình luận"
                              // defaultValue={editTextarea}
                              rows={1}
                              {...register("commentContent")}
                            ></textarea>
                            <div className="flex gap-10 mt-3 justify-center">
                              <button
                                className="w-[100px] h-[30px] flex items-center justify-center bg-red-600 text-white"
                                onClick={() => handleCancelUpdate()}
                              >
                                Hủy
                              </button>
                              <button
                                type="submit"
                                className="w-[100px] h-[30px] flex items-center justify-center bg-green-600 text-white"
                              >
                                Lưu
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={item.id}
                        className="flex gap-10 items-center mt-5 border border-gray-400 py-4 rounded-lg w-full "
                      >
                        <img
                          src={item.user.avatar}
                          className="w-[50px] h-[50px] rounded-full"
                          alt={item.user.name}
                        />
                        <div className="flex flex-col w-full gap-5 ">
                          <h5 className="text-[15px] font-semibold">{item?.user.name}</h5>
                          <p className="break-words">{ReactHtml(item.contentComment)}</p>
                          <div className="flex gap-10">
                            <span
                              className="cursor-pointer"
                              onClick={() => handleEditComment(item.id)}
                            >
                              Edit
                            </span>
                            <span
                              className="cursor-pointer"
                              onClick={() => handleDeleteComment(item.id)}
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="modal-body-right flex-grow">
                <h3 className="text-[20px] font-semibold">STATUS</h3>
                <Select
                  className="w-full p-2 relative z-[9999]"
                  options={options}
                  styles={customStyles}
                  // value={taskDetailModal.statusId}
                  defaultValue={defaultOption}
                  onChange={(selectedOption, event) =>
                    handleChange(selectedOption, event, "statusId")
                  }
                />
                <h3 className="text-[20px] font-semibold">ASSIGNEES</h3>
                <div className="flex items-center">
                  <div className="w-full">
                    <MyAvatarGroup></MyAvatarGroup>
                  </div>
                  <div>
                  
                  </div>
                </div>
                <h3 className="text-[20px] font-semibold">PRIORITY</h3>
                <Select
                  className="w-full p-2"
                  options={optionsPriorityList}
                  styles={customStyles}
                  defaultValue={defaultPriority}
                  onChange={(selectedOption, event) =>
                    handleChange(selectedOption, event, "priorityId")
                  }
                />
                <InputAdminField
                  name="originalEstimate"
                  label="Original Estimate (HOURS)"
                  control={control}
                  variant="outlined"
                  type="number"
                  min="0"
                  value={taskDetailModal.originalEstimate}
                  onChange={(event) => {
                    const { name, value } = event.target;
                    dispatch(changeTask({ name, value: parseInt(value, 10) }));
                  }}
                />
                <div className="">
                  <SliderTimeField
                    label="Time Tracking"
                    timeSpent={timeTracking.timeTrackingSpent}
                    timeRemaining={timeTracking.timeTrackingRemaining}
                  />

                  <div className="my-4 flex justify-between gap-8">
                    <div className="flex-1 flex flex-col ">
                      <label className="mb-4 text-sm text-gray-600 font-medium">
                        Time spent (hours)
                      </label>
                      <FormControl>
                        <Input
                          name="timeTrackingSpent"
                          className="px-2"
                          value={timeTracking.timeTrackingSpent}
                          min="0"
                          type="number"
                          onChange={handleChangeTime}
                        />
                      </FormControl>
                    </div>

                    <div className="flex-1 flex flex-col ">
                      <label className="mb-4 text-sm text-gray-600 font-medium">
                        Time remaining (hours)
                      </label>
                      <FormControl>
                        <Input
                          name="timeTrackingRemaining"
                          className="px-2"
                          value={timeTracking.timeTrackingRemaining}
                          min="0"
                          type="number"
                          onChange={handleChangeTime}
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyModal>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default ModalEdit;
