import React from "react";

const Member = (member) => {
  return (
    <li className="sender">
      {/* izmjena */}
      <div>
        <p classname="sender_info" style={{ backgroundColor: member.color }}>
          {member.name}
        </p>
      </div>
    </li>
  );
};
export default Member;
