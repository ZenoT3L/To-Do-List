function List(props) {
  return (
    <li
      onClick={() => {
        props.onSelect(props.id);
      }}
    >
      {props.val}
    </li>
  );
}

export default List;
