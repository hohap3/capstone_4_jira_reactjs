import MemberInfo from "components/memberInfo/MemberInfo";
import React from "react";

function MemberInfoList({ memberList }) {
  return (
    <div className="h-44 overflow-y-scroll overflow-x-hidden px-2">
      {memberList.slice(3).map((member) => (
        <MemberInfo member={member} />
      ))}
    </div>
  );
}

export default MemberInfoList;
