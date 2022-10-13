import React from "react";

interface Props {
  type: "active" | "disabled";
}
function Status(props: Props) {
  function getBadgeCss() {
    switch (props.type) {
      case "active":
        return "bg-success";
      case "disabled":
        return "bg-secondary";
      default:
        return "bg-secondary";
    }
  }

  return (
    <span className={`badge ${getBadgeCss()} text-capitalize`}>
      {props.type}
    </span>
  );
}

export default Status;
