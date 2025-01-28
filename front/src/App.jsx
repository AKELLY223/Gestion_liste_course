import React, { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingList";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState(() => {
    // Charger les données depuis localStorage
    const savedItems = localStorage.getItem("shoppingList");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Sauvegarder les données dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  // Ajouter un article
  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      addedAt: new Date().toISOString(),
      deletedAt: null,
      purchased: false,
    };
    setItems([...items, newItem]);
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
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, deletedAt: new Date().toISOString() } : item
      )
    );
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