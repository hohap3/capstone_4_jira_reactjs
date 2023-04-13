import MyAvatarGroup from "components/avatar/Avatar";
import MyModal from "components/modal/Modal";
import { useEffect, useState } from "react";
import ReactHtml from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ToggleModal } from "reduxs/Slice/taskSlice";
import { fetchCommentList } from "thunks/commentThunk";
const ModalEdit = () => {
  const { isOpen, taskDetailModal } = useSelector((state) => state.task);
  const { statusList } = useSelector((state) => state.status);
  const { commentList } = useSelector((state) => state.comment);
  const [editComment, setEditComment] = useState({});
  console.log("file: ModalEdit.jsx:14 ~ editComment:", editComment);
  const dispatch = useDispatch();
  
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
      value: item.statusName,
      label: item.statusName,
      statusId: item.statusId,
    });
  });
  let defaultOption = null;
  if (taskDetailModal?.statusId) {
    defaultOption = options.find((option) => option.statusId === taskDetailModal.statusId);
  }

  const renderDescription = () => ReactHtml(taskDetailModal.description);
  const handleEditComment = (id) => {
    setEditComment({ edit: true, id });
  };
  return (
    <div>
      <MyModal open={isOpen} close={isOpen}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-blue-200 w-[1000px] p-10">
            <div className="modal-header ">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="green"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  <span>{taskDetailModal?.taskName}</span>
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
                <p className="text-[15px] font-semibold mt-10">Description:</p>
                <p className="break-words my-3">{renderDescription()}</p>
                <p className="text-[15px] font-semibold mt-10">Comment:</p>
                <div className="flex gap-10 items-center mt-5">
                  <img
                    src="https://cdn.tgdd.vn/Files/2022/03/31/1423196/moi-dieu-can-biet-cho-con-cach-nuoi-cham-soc-va-huan-luyen-202203311033114159.jpg"
                    className="w-[50px] h-[50px] rounded-full"
                    alt="ấ"
                  />
                  <textarea
                    className="w-full resize-none outline-none px-5 py-2"
                    placeholder="Thêm 1 bình luận"
                    rows={1}
                  ></textarea>
                </div>
                <div className="comment max-h-[300px] overflow-auto">
                  {commentList?.map((item) =>
                    editComment.edit === true && editComment.id === item.id ? (
                      <div key={item.id} className="flex gap-10 items-center mt-5">
                      <img
                          src={item.user.avatar}
                          className="w-[50px] h-[50px] rounded-full"
                          alt={item.user.name}
                        />
                        <textarea
                          className="w-full resize-none outline-none px-5 py-2"
                          placeholder="Cập nhật bình luận"
                          defaultValue={item.contentComment}
                          rows={1}
                        ></textarea>
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
                            <span className="cursor-pointer">Delete</span>
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
                  defaultValue={defaultOption}
                />
                <h3 className="text-[20px] font-semibold">ASSIGNEES</h3>
                <div>
                  <MyAvatarGroup></MyAvatarGroup>
                </div>
                <h3 className="text-[20px] font-semibold">PRIORITY</h3>
                <Select
                  className="w-full p-2"
                  options={options}
                  styles={customStyles}
                  defaultValue={defaultOption}
                />
              </div>
            </div>
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default ModalEdit;
