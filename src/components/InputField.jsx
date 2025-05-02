function InputField(props) {
  return (
    <div className="form">
      <input type="text" value={props.text} onChange={props.newText} />
      <button onClick={props.listFunction}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputField;
