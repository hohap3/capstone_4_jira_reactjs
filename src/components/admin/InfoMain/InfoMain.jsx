import { Avatar, Popover } from "antd";
import MemberInfo from "components/memberInfo/MemberInfo";
import MemberInfoList from "components/memberInfoList/MemberInfoList";
import React from "react";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import "./infoMain.scss";

function InfoMain(props) {
  const projectDetailById = useSelector((state) => state.project.projectDetailById);

  function renderMember() {
    if (!projectDetailById) return;
    return (
      <div className="flex items-center gap-2">
        {projectDetailById.members?.slice(0, 3).map((member) => (
          <Popover
            key={member.userId}
            placement="top"
            trigger="hover"
            content={<MemberInfo member={member} />}
          >
            <Avatar src={member.avatar} />
          </Popover>
        ))}
        {projectDetailById.members.length > 3 ? (
          <Popover
            placement="bottom"
            trigger="hover"
            content={<MemberInfoList memberList={projectDetailById.members} />}
          >
            <Avatar>...</Avatar>
          </Popover>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-medium mb-0">
        {projectDetailById && projectDetailById.projectName} Board
      </h3>

      <div className="description-text mt-4 mb-2">
        {projectDetailById && ReactHtmlParser(projectDetailById.description)}
      </div>

      <div className="info items-center" style={{ display: "flex" }}>
        <div className="search-block flex items-center gap-2">
          <input className="search px-3" placeholder="Search something..." />
        </div>
        <div className="avatar-group gap-1" style={{ display: "flex" }}>
          {renderMember()}
        </div>
        <div style={{ marginLeft: 20 }} className="text-sm">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text-sm">
          Recently Updated
        </div>
      </div>
    </>
  );
}

export default InfoMain;
