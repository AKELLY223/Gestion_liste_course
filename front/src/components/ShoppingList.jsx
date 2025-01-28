import React from "react";

function ShoppingList({ items, onMarkAsPurchased, onDeleteItem }) {
  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500">Aucun article dans la liste.</p>
    );
  }

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Nom de l'article</th>
          <th className="border border-gray-300 px-4 py-2">Ajouté le</th>
          <th className="border border-gray-300 px-4 py-2">Supprimé le</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {new Date(item.addedAt).toLocaleString()}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {item.deletedAt
                ? new Date(item.deletedAt).toLocaleString()
                : "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {!item.purchased && (
                <button
                  onClick={() => onMarkAsPurchased(item.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShoppingList;