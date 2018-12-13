const express = require('express');
const bodyParser = require('body-parser');
const Shopify = require('shopify-api-node');
const cors = require('cors');

const shopify = new Shopify({
  shopName: 'app-test-store-km.myshopify.com',
  apiKey: '01295d103fda9f8dc1b6191087dbcdeb',
  password: '22ce6e120d59494e27b49b30fbfb2127'
});

const port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-product', (req, res) => {
	res.send(req.body.products);
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});