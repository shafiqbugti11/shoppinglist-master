import React, { useState } from "react";

function Shopping() {

  const [shoppingList, setShoppingList] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();

  const handleAddItem = () => {
    if (inputItem && price > 0 && quantity > 0) {
      setShoppingList([
        ...shoppingList,
        { item: inputItem, quantity, price },
      ]);
      setInputItem('');
      setQuantity(1);
      setPrice(0);
    } else {
      alert('Please fill all fields with valid data.');
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>

      {}
      <input
        type="text"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
        placeholder="Enter the item"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Enter quantity"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Enter price"
      />

      {}
      <button onClick={handleAddItem}>Add Item</button>

      {}
      <ul>
        {shoppingList.map((list, index) => (
          <li key={index}>
            {list.item} - Quantity: ({list.quantity}) <br></br> RS:  {list.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;
