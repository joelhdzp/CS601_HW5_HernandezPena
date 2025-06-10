import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem.jsx";

/* InventoryList fetches and displays the list of inventory items */
function InventoryList() {
  /* Constant to map each item with a key */
  const [items, setItems] = useState([]);

  /* Fetch inventory data from public/inventory.json on component mount */
  useEffect(() => {
    fetch("/inventory.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to fetch inventory.json:", err));
  }, []);

  /* InventoryList displays the list's title and each item in InventoryItem  */
  return (
    <div>
        <div className="list-title">
            <h2>Inventory</h2>
        </div>
        <div className="inventory-list">
        {items.map((item) => (
            <InventoryItem
            key={item.sku}
            sku={item.sku}
            name={item.name}
            qty={item.qty}
            price={item.price}
            />
        ))}
        </div>
    </div>
  );
}

export default InventoryList;