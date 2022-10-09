interface Props {
  text: string;
  secText?: string;
  // cssBgc = "bg-dark text-white" | "bg-white text-dark";
}

function Title(props: Props) {
  return (
    <>
      {/* <div className={{ cssBgc: "bg-white text-dark" }}> */}
      <div className="pt-1 pb-1 mb-3">
        <h1 className="text-center">
          <div>{props.text}</div>
        </h1>
        <h2 className="text-center m-3 text-muted">
          <div>{props.secText}</div>
        </h2>
      </div>
      {/* </div> */}
    </>
  );
}

export default Title;
