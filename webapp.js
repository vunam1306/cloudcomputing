const express = require("express");
const app = express();

// Route chính
app.get("/", (req, res) => {
  res.send("Hello World from Vercel!");
});

// Cổng do Vercel tự động cung cấp
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
