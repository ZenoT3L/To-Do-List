import List from "./List";

function UnorderedList(props) {
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <List key={index} val={item} id={index} onSelect={props.deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default UnorderedList;
