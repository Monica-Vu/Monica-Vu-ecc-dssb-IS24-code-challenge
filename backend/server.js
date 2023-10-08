const express = require("express");
const Joi = require("joi");
const products = require("./sample_data");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: validate startDate field
const schema = Joi.object({
  productName: Joi.string().min(1).required(),
  productOwnerName: Joi.string().min(1).required(),
  developers: Joi.array().min(1).max(5).required(),
  scrumMasterName: Joi.string().min(1).required(),
  methodology: Joi.string().valid("Agile", "Waterfall").required(),
  startDate: Joi.string().min(10).required(),
  location: Joi.string().min(10).required(),
}).options({ abortEarly: false });

// TODO: might need to set it to 0
let currentProductId = 34;

app.get("/", (request, response) => {
  response.send(`Hello! I'm sad.`);
});

app.get("/products", (request, response) => {
  response.status(200).json(products);
});

app.get("/products/:id", (request, response) => {
  const paramId = parseInt(request.params.id);

  const product = products.find((product) => product.productId === paramId);

  if (product) {
    response.status(200).json({ Message: `Product with ${paramId} found` });
    return;
  }

  response.status(404).json({ Message: `Product with ${paramId} not found` });
});

// TODO: validate fields and check if endpoint works
app.post("/products", (request, response) => {
  const { error } = schema.validate(request.body);

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

app.put("/products/:id", (request, response) => {
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

app.get("/health", (request, response) => {
  response.status(200).send("OK");
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
