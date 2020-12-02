function button(props) {
  return (
    <div>
      <button onClick={props.click} className={`button${props.color}`}>
        props.text
      </button>
    </div>
  );
}

export { button };
