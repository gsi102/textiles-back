import express from "express";
import cors from "cors";
import path from "path";

const app = express();
// prod
// const port = process.env.PORT || 8080;
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// ENDPOINTS
app.get("/products", async (req, res) => {
  const productsFile = path.join(__dirname, "./data/products.json");
  res
    .status(200)
    .header("Content-Type", "application/json")
    .sendFile(productsFile);
});

app.get("/products/:id", async (req, res) => {
  const productID = req.params.id;
  const productFile = path.join(__dirname, `./data/product_${productID}.json`);
  res
    .status(200)
    .header("Content-Type", "application/json")
    .sendFile(productFile);
});

app.get("/*", async (req, res) => {
  res.sendStatus(400);
});

//------------------------------
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
