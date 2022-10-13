interface Props {
  text: string;
  secText?: string;
  cssBgc: "white" | "black";
}

function Title(props: Props) {
  function getCssBgc() {
    switch (props.cssBgc) {
      case "black":
        return "bg-dark text-white";
      case "white":
        return "bg-white text-dark";
      default:
        return "bg-white text-dark";
    }
  }

  return (
    <>
      <div className={getCssBgc()}>
        <div className="container-fluid pt-1 pb-1 mb-3">
          <h1 className="text-center">
            <div>{props.text}</div>
          </h1>
          <h2 className="text-center m-3 text-muted">
            <div>{props.secText}</div>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Title;
