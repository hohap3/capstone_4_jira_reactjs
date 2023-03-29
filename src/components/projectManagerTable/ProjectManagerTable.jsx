import { Button } from "@mui/material";
import { AutoComplete, Avatar, Popover, Table, Tag } from "antd";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReactHtmlParser from "react-html-parser";

import { setSelectedProject } from "reduxs/Slice/projectSlice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { fetchUserList } from "thunks/userThunk";
import MemberDetail from "components/memberDetail/MemberDetail";

function ProjectManagerTable({ onAddUser, onRemoveProject }) {
  const isLoading = useSelector((state) => state.project.isLoading);
  const projectList = useSelector((state) => state.project.projectList);
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    userId: null,
    value: "",
  });

  // edit project

  function handleEditProject(record) {
    if (projectList.length < 1) return;
    dispatch(setSelectedProject(record));
  }

  function handleAssignUser(projectId) {
    if (!state.userId) return;

    const data = { projectId, userId: state.userId };

    if (onAddUser) onAddUser(data);
    // reset State

    setState({
      userId: null,
      value: "",
    });
  }

  function handleRemoveProject(record) {
    if (projectList.length < 1) return;

    if (onRemoveProject) onRemoveProject(record);
  }

  const columns = [
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      render: (text) => {
        const { name } = text;
        return (
          <Tag color="blue" className="font-normal">
            {name}
          </Tag>
        );
      },

      sorter: (a, b) => a.creator.name.localeCompare(b.creator.name),
    },
    {
      title: "Project name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text) => {
        const html = `<p class="font-normal">${text}</p>`;
        return ReactHtmlParser(html);
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        return ReactHtmlParser(text);
      },
    },

    {
      title: "Category name",
      dataIndex: "categoryName",
      key: "categoryName",

      render: (text) => {
        const html = `<p class="font-normal">${text}</p>`;
        return ReactHtmlParser(html);
      },
      filters: [
        {
          text: "Dự án web",
          value: 1,
        },

        {
          text: "Dự án phần mềm",
          value: 2,
        },

        {
          text: "Dự án di động",
          value: 3,
        },
      ],
      onFilter: (value, record) => record.categoryId === value,
    },
    {
      title: "Members",
      dataIndex: "members",
      key: "members",
      render: (text, record, index) => {
        const { id, members } = record;
        return (
          <div>
            {members?.slice(0, 3).map((member) => (
              <Popover
                key={member.userId}
                placement="top"
                trigger="hover"
                content={<MemberDetail member={member} projectId={id} />}
              >
                <Avatar title={member.name} className="m-1" src={member.avatar} />
              </Popover>
            ))}
            {members?.length > 3 ? (
              <Popover
                placement="bottom"
                trigger="hover"
                content={() => (
                  <div>
                    {members?.slice(3).map((member) => (
                      <MemberDetail member={member} projectId={id} />
                    ))}
                  </div>
                )}
              >
                <Avatar>...</Avatar>
              </Popover>
            ) : (
              ""
            )}
            <Popover
              trigger="click"
              placement="top"
              title="Add new user"
              content={() => (
                <div>
                  <AutoComplete
                    options={userList?.map((user, idx) => ({
                      label: user.name,
                      value: user.userId.toString(),
                    }))}
                    className="w-full"
                    placeholder="Add member"
                    onSearch={(value) => {
                      dispatch(fetchUserList(value));
                    }}
                    onSelect={(value, option) => {
                      const { label } = option;
                      setState({
                        userId: +value,
                        value: label,
                      });
                    }}
                    onChange={(text) => {
                      setState((prevState) => ({ ...prevState, value: text }));
                    }}
                    value={state.value}
                  />
                  <Button
                    variant="contained"
                    sx={{ margin: "0.6rem 0" }}
                    onClick={() => handleAssignUser(id)}
                  >
                    Add
                  </Button>
                </div>
              )}
            >
              <Button variant="text" onClick={() => handleOpenPop(index)} title="Add new user">
                <PersonAddIcon />
              </Button>
            </Popover>
          </div>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <div className="flex items-center">
            <Button sx={{ color: "green" }} onClick={() => handleEditProject(record)}>
              <EditIcon />
            </Button>

            <Button onClick={() => handleRemoveProject(record)} sx={{ color: "red" }}>
              <DeleteIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="my-2">
      {isLoading && <LoadingCircle />}

      {!isLoading && (
        <div className="my-2">
          <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default ProjectManagerTable;
