import InputField from "./InputField";
import Heading from "./Heading";
import UnorderedList from "./UnorderedList";

function Container(props) {
  return (
    <div className="container">
      <Heading />
      <InputField
        text={props.item}
        newText={props.setItem}
        listFunction={props.addItem}
      />
      <UnorderedList list={props.list} deleteItem={props.deleteFunction} />
    </div>
  );
}

export default Container;
