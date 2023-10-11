const express = require("express");
const Joi = require("joi");
const cors = require('cors');
const products = require("./sample_data");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ECC Ministry Applications API',
      version: '1.0.0',
      description: 'API for Coding Challenge (IS24 - Full Stack Developer at Ministry of Education & Child Care)',
    },
    basePath: "/api",
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./swagger.yaml'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const schema = Joi.object({
  productId: Joi.number().integer(),
  productName: Joi.string().min(1).required().messages({
    'string.empty': `Product Name cannot be empty`,
    'any.required': `Product Name is a required field `
  }),
  productOwnerName: Joi.string().min(1).required().messages({
    'string.empty': `Product Owner Name cannot be empty`,
    'any.required': `Product Owner Name is a required field`
  }),
  developers: Joi.array().min(1).max(5).required().messages({
    'array.min': `Please list at least one developer`, 
    'array.max': "Please list no more than five developers",
    'any.required': `Developer(s) cannot be empty`
  }),
  scrumMasterName: Joi.string().min(1).required().messages({
    'string.empty': `Scrum Master Name cannot be empty`,
    'any.required': `Scrum master is a required field`
  }),
  methodology: Joi.string().valid("Agile", "Waterfall").required().messages({
    'any.required': `Methodology must either be Agile or Waterfall`
  }),
  startDate: Joi.string().allow(''),
  location: Joi.string().allow('')
}).options({ abortEarly: false });

// TODO: might need to set it to 0
let currentProductId = 34;

// TODO: maybe delete
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

app.post("/api/products", (request, response) => {
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

app.put("/api/products/:id", (request, response) => {
  const paramId = parseInt(request.params.id);
  const product = products.find((product) => product.productId === paramId);

  const { error } = schema.validate(request.body);

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return response.status(400).json({ Errors: errorMessages });
  }

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
