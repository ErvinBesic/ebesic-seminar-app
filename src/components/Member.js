import React from "react";

const Member = (member) => {
  return (
    <li>
      {/* izmjena */}
      <div classname="sender">
        <p classname="sender_info" style={{ color: member.color }}>
          {member.name}
        </p>
      </div>
    </li>
  );
};
export default Member;
