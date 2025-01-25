const express = require("express");
const app = express();
const PORT = 5000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
