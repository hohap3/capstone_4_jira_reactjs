import { Button } from "@mui/material";
import { Table, Tag } from "antd";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReactHtmlParser from "react-html-parser";
import Swal from "sweetalert2";
import projectAPI from "API/projectAPI";
import { STATUS_CODE } from "constants";

function ProjectManagerTable() {
  const isLoading = useSelector((state) => state.project.isLoading);
  const projectList = useSelector((state) => state.project.projectList);

  function handleRemoveProject(idx) {
    if (projectList.length < 1) return;

    const { projectName, id } = projectList[idx];

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
        console.log(error);

        const { statusCode, content } = error.response.data;

        switch (statusCode) {
          case STATUS_CODE.ERROR_FORBIDDEN: {
            Swal.fire({
              title: `Oops...`,
              icon: "error",
              text: `${content}`,
            });
            break;
          }
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div className="flex items-center">
            <Button onClick={() => handleRemoveProject(index)} sx={{ color: "red" }}>
              <DeleteIcon />
            </Button>

            <Button sx={{ color: "green" }}>
              <EditIcon />
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
