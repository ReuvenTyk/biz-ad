interface Props {
  text: string;
  secText?: string;
}

function Title(props: Props) {
  return (
    <h1 className="text-center m-3">
      <div>{props.text}</div>
      <div>{props.secText}</div>
    </h1>
  );
}

export default Title;
