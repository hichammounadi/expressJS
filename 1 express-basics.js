const express = require('express')
const app = express()

// home page
app.get('/', (req, res) =>{
    res.send('Home Page')
})
app.get('/about', (req, res) => {
    res.send('About page')
})

app.all('*', (req, res) =>{
    res.status(404).send('<h1>resource not found</h1>')
})


// here is the server
app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})

//app.get
// app.post
// app.put
// app.delete
// app.all
// app.use