import { useState } from "react";

export function useTodoList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    if (item.trim() === "") return;

    setList([...list, item]);
    setItem("");
  };

  const deleteItem = (id) => {
    setList((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return { item, list, handleItem, addItem, deleteItem };
}
