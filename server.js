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

app.post('/create-product', async (req, res) => {
	let text = req.body.products.map(prod => prod.title).join(',');

	let data = {
		title: 'Build Product',
		body_html: '<p>'+ text +'</p>',
		product_type: 'Node Built',
		variants: [{
			option1: 'First',
			price: '50.00',
			sku: '321321'
		}]
	}
	try {
		let createdProd = await shopify.product.create(data)
			.then(res => { return res; })
			.catch(e => console.log(e))
			res.send(createdProd);
	} catch(e) {
		console.log(e);
	}


});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});