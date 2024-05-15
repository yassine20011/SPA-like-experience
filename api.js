const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5050;


app.use('/api_images', express.static(path.join(__dirname, 'api_images')));

app.get('/products', (req, res) => {
    const jsonPath = path.join(__dirname, 'api_data.json');

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

      
        const products = JSON.parse(data);
        res.json(products);
    });
});

app.get('/products/:productId', (req, res) => {
    const jsonPath = path.join(__dirname, 'api_data.json');

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const products = JSON.parse(data);

        const productId = req.params.productId;
        const product = products.find(p => p.id == productId);

        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        res.json(product);
    });
});

app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
});
