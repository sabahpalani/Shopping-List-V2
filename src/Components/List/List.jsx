import React, { useState } from "react";
import "./List.css";
import Cross from "../Assets/Cross.png";

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, { text: inputValue, crossedOut: false }]);
      setInputValue("");
    }
  };

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].crossedOut = !newItems[index].crossedOut;
    setItems(newItems);
  };

  const handleDelete = (e, index) => {
    e.stopPropagation();
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div>
      <div className="Border-sl">
        <h1 className="Header">Shopping List</h1>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`Listings ${item.crossedOut ? "crossed-out" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item.text}
              <button onClick={(e) => handleDelete(e, index)} className="deleteButton">
                <img src={Cross} className="Cross"/>
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Item"
            className="enterValue"
          />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default List;
