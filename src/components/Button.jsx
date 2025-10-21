function Button(props) {
  return (
    <div>
      <button type={props.type} icon={props.icon} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
