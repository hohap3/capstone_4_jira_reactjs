import { Button } from "@mui/material";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import AppsIcon from "@mui/icons-material/Apps";
import { Layout, Menu, theme } from "antd";
import { USER_LOGIN } from "constants";

const { Header, Sider, Content } = Layout;

function Sidebar(props) {
  const [collapse, setCollapse] = useState(true);

  function handleToggleCollapse() {
    setCollapse((prevState) => !prevState);
  }

  return (
    // <div className="sideBar">
    //   <div className="sideBar-top">
    //     <div className="sideBar-icon p-0 text-center">
    //       <AppsIcon className="text-white" />
    //     </div>
    //     <div
    //       className="sideBar-icon p-0"
    //       data-toggle="modal"
    //       data-target="#searchModal"
    //       style={{ cursor: "pointer" }}
    //     >
    //       <Button className="flex items-center">
    //         <SearchOutlinedIcon sx={{ fontSize: "1.6rem", color: "#fff" }} />

    //         <span className="title ml-3">SEARCH ISSUES</span>
    //       </Button>
    //     </div>
    //     <div className="sideBar-icon">
    //       <Button>
    //         <AddIcon sx={{ fontSize: "1.4rem", color: "#fff" }} />
    //         <span className="title ml-3">CREATE ISSUES</span>
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="sideBar-bottom">
    //     <div className="sideBar-icon">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-6 h-6 text-white inline-block mr-4"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    //         />
    //       </svg>

    //       <span className="title">ABOUT</span>
    //     </div>
    //   </div>
    // </div>

    <div className="h-full">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapse}
        style={{ height: "100%", background: "#001529" }}
      >
        <div className="text-center text-[#919aa3] mb-4">
          <Button onClick={handleToggleCollapse} sx={{ color: "#fff" }}>
            <AppsIcon />
          </Button>
        </div>
        <Menu
          className="h-full"
          mode="inline"
          theme="dark"
          style={{ height: "100%" }}
          items={[
            {
              key: 1,
              icon: <AddIcon />,
              label: "Search Issue",
            },

            {
              key: 2,
              icon: <SearchOutlinedIcon />,
              label: "Create Issue",
            },
          ]}
        ></Menu>
      </Sider>
    </div>
  );
}

export default Sidebar;
