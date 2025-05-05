// import { useState } from "react";
import Container from "./components/Container";
import { useTodoList } from "./components/functions";

function App() {
  const { item, list, handleItem, addItem, deleteItem } = useTodoList();

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
