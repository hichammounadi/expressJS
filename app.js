const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    // res.json(products)
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id, name,image}
    })
    res.json(newProduct)
})




app.listen(5000, () =>{
    console.log('server listening on port 5000...');
})