import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  // Ajouter un article
  const addItem = (name) => {
    setItems([...items, { id: Date.now(), name, purchased: false }]);
  };

  // Marquer un article comme acheté
  const markAsPurchased = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, purchased: true } : item
      )
    );
  };

  // Supprimer un article
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">
        Liste de courses collaborative
      </h1>
      <AddItemForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onMarkAsPurchased={markAsPurchased}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
