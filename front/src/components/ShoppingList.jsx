import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onMarkAsPurchased, onDeleteItem }) {
  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500">Aucun article dans la liste.</p>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onMarkAsPurchased={onMarkAsPurchased}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
