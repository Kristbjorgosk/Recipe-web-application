function Button(props) {
  return (
    <div>
      <button onClick={props.click} className={`mainButtons${props.color}`}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
