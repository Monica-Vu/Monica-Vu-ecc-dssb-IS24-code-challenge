const express = require('express')
const products = require('./sample_data');
const app = express()
const port = 3000

app.use(express.json());

// TODO: might need to set it to 0
let currentProductNumber = 34; 

app.get('/', (request, response) => {
    response.send(`Hello! I'm sad.`);
})

app.get('/products', (request, response) => {
    response.status(200).json(products)
})

app.get('/products/:number', (request, response) => {
    const paramNumber = parseInt(request.params.number);

    const product = products.find((product) => product.productNumber === paramNumber );
    
    if (product) {
        response.status(200).json({ "Message": `Product with ${paramNumber} found`})
        return;
    }
    response.status(404).json({ "Message":`Product with ${paramNumber} not found` })
})

// TODO: validate fields and check if endpoint works
app.post('/products', (request, response) => {
    currentProductNumber++;

    const newProduct = {
        productNumber: currentProductNumber,
        productName: request.body.productName,
        productOwnerName: request.body.productOwnerName,
        developers: request.body.developers,
        scrumMasterName: request.body.scrumMasterName,
        startDate: request.body.startDate,
        methodology: request.body.methodology,
        location: request.body.location
    }

    products.push(newProduct)
    response.status(201).json({ "Message": "Product is created successfully"})
    response.status(400).json({"Message:": "Product cannot be created"})
})

// TODO: validate fields and check if endpoint works
app.put('/products/:number', (request, response) => {
    const paramNumber = parseInt(request.params.number);
    const product = products.find((product) => product.productNumber === paramNumber );
    
    if (product) {
        const { productName, productOwnerName, developers, scrumMasterName, methodology, location } = request.body
        product.productName = productName;
        product.productOwnerName = productOwnerName;
        product.scrumMasterName = scrumMasterName;
        product.developers = developers;
        product.methodology = methodology;
        product.location = location;

        response.status(200).json({"Message:": "Product information updated successfully"})
        return;
    }

    response.status(404).json({"Message:": "Product not found"})
})

app.get('/health', (request, response) => {
    response.status(200).send('OK')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})