import { badgeType } from "../Services";

interface Props {
  type: badgeType;
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
