import { useState } from "react";
import Container from "./components/Container";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(["A Item"]);

  function handleItem(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if (item.trim() === "") return;

    setList([...list, item]);
    setItem("");
  }

  function deleteItem(id) {
    setList((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Container
        item={item}
        setItem={handleItem}
        addItem={addItem}
        list={list}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
