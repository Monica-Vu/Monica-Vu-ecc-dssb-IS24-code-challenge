const express = require('express')
const products = require('./sample_data');
const app = express()
const port = 3000

// TODO: make increment
const INCREMENTOR = 41; 

app.get('/', (request, response) => {
    response.send(`Hello! I'm sad.`);
})

app.get('/products', (request, response) => {
    response.status(200).json(products)
})

// TODO: validate fields and check if endpoint works
app.post('/products', (request, response) => {
    // TODO: add product id
    products.push(request.body)
    response.status(201).json({ "Message": "Product is created successfully"})
})

// TODO: validate fields and check if endpoint works
app.put('/products/:id', (request, response) => {
    const product = products.find((product) => product.productId === request.params.id);

    if (product) {
        const { productName, productOwnerName, developers, scrumMasterName, startDate, methodology, location } = request.body
        product.productName = productName;
        product.productOwnerName = productOwnerName;
        product.developers = developers;
        product.scrumMasterName = scrumMasterName;
        product.startDate = startDate;
        product.methodology = methodology;
        product.location = location;

        response.status(200).json({"Message:": "Product information updated successfully"})
        return
    }

    response.status(404).json({"Message:": "Product not found"})
})

app.get('/health', (request, response) => {
    response.status(200).send('OK')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})