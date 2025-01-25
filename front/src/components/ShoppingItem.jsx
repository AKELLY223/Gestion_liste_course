import React from "react";

function ShoppingItem({ item, onMarkAsPurchased, onDeleteItem }) {
  return (
    <li
      className={`flex justify-between items-center p-2 border rounded ${
        item.purchased ? "bg-green-100" : "bg-white"
      }`}
    >
      <span
        className={`flex-1 ${
          item.purchased ? "line-through text-gray-500" : ""
        }`}
      >
        {item.name}
      </span>
      <div className="flex gap-2">
        {!item.purchased && (
          <button
            onClick={() => onMarkAsPurchased(item.id)}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Acheter
          </button>
        )}
        <button
          onClick={() => onDeleteItem(item.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default ShoppingItem;
