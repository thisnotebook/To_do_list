import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackingList"
import Stats from "./Stats"




export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
    {/*  ... spread operator make new array so beacuse mutation(or changing) not allow  */ }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    // how to delete item from Arrays when filter get false it filter out it
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed }
          : item
      )
      //updating array elements
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "you really want to delete"
    );
    //this is comfirm box not a alert //function are same but have two option 
    // "ok" and "cancel" but alert have only "ok"

    //how to give alert(dom function) with react 
    if (confirmed) setItems([]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems=
        {handleDeleteItem} onToggleItem={handleToggle}
        onClearItems={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

// {//her3}

