import React, { useCallback, useState } from "react";
import "./index.css";

const SortableList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const sortAscending = useCallback(() => {
    // logic
    setList((prev) => {
      const newList = [...prev];
      newList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      console.log("newList", newList);
      return newList;
    });
  }, []);

  const sortDescending = useCallback(() => {
    // logic
    setList((prev) => {
      const newList = [...prev];
      newList.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
      console.log("newList", newList);
      return newList;
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const addList = (text) => {
    if (text) {
      setList((prev) => [...prev, text]);
      setText("");
    }
  };

  console.log("text", text);

  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
        placeholder="Add a new item"
      />
      <button onClick={() => addList(text)}>Add Item</button>

      <div>
        <button onClick={() => sortAscending()}>Sort Ascending</button>
        <button onClick={() => sortDescending()}>Sort Descending</button>
      </div>
      <div className="list-items">
        {list.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </div>
    </div>
  );
};

export default SortableList;
