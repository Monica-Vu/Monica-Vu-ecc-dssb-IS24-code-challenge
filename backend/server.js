const express = require("express");
const Joi = require("joi");
const cors = require('cors');
const products = require("./sample_data");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// TODO: validate startDate field and change everything to required
const schema = Joi.object({
  productName: Joi.string().min(1).required(),
  productOwnerName: Joi.string().min(1).required(),
  developers: Joi.array().min(1).max(5),
  scrumMasterName: Joi.string().min(1),
  methodology: Joi.string().valid("Agile", "Waterfall"),
  startDate: Joi.string().min(10),
  location: Joi.string().min(10),
}).options({ abortEarly: false });

// TODO: might need to set it to 0
let currentProductId = 34;

app.get("/api", (request, response) => {
  response.status(200).send("OK");
});

app.get("/api/health", (request, response) => {
  response.status(200).send("OK");
  return;
});

app.get("/api/products", (request, response) => {
  response.status(200).json(products);
});

app.get("/api/products/:id", (request, response) => {
  const paramId = parseInt(request.params.id);

  const product = products.find((product) => product.productId === paramId);

  if (product) {
    response.status(200).json({ Message: `Product with ${paramId} found` });
    return;
  }

  response.status(404).json({ Message: `Product with ${paramId} not found` });
});

// TODO: validate fields and check if endpoint works
app.post("/api/products", (request, response) => {
  const { error } = schema.validate(request.body);

  console.log(`REsponse Body: `, request.body);

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return response.status(400).json({ Errors: errorMessages });
  }

  currentProductId++;

  const newProduct = {
    productId: currentProductId,
    productName: request.body.productName,
    productOwnerName: request.body.productOwnerName,
    developers: request.body.developers,
    scrumMasterName: request.body.scrumMasterName,
    startDate: request.body.startDate,
    methodology: request.body.methodology,
    location: request.body.location,
  };

  products.push(newProduct);
  response
    .status(201)
    .json({
      Message: `Product with id ${currentProductId} is created successfully`,
    });
});

app.put("/api/products/:id", (request, response) => {
  const paramId = parseInt(request.params.id);
  const product = products.find((product) => product.productId === paramId);

  if (product) {
    const {
      productName,
      productOwnerName,
      developers,
      scrumMasterName,
      methodology,
      location,
    } = request.body;
    product.productName = productName;
    product.productOwnerName = productOwnerName;
    product.scrumMasterName = scrumMasterName;
    product.developers = developers;
    product.methodology = methodology;
    product.location = location;

    response
      .status(200)
      .json({ "Message:": "Product information updated successfully" });
    return;
  }

  response.status(404).json({ "Message:": "Product not found" });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
