import { Avatar } from "antd";
import React from "react";

function MemberInfo({ member }) {
  const { avatar, name } = member;

  return (
    <div className="my-2">
      <div className="flex items-center gap-2">
        <Avatar src={avatar} />
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default MemberInfo;
