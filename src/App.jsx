import { useState } from "react";
import List from "./List";

function App() {
  const [list, setList] = useState(["An Item"]);
  const [Item, setItem] = useState("");

  function addNewItem(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if (Item.trim() === "") return; // Prevent empty items
    setList([...list, Item]);
    setItem("");
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" name="Item" value={Item} onChange={addNewItem} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {list.map((item, id) => (
              <List key={id} val={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
