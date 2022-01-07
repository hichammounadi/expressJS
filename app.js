const express = require('express');
const app = express();
let { people } = require('./data');
// static assets
app.use(express.static('./methods-public'));
// parse form data in place of bodyParser
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post('/login', (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please Provide Credential');
});

// GET method
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST METHOD
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).send({ success: true, person: name });
});

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).send({success:true,data: [...people,name]})
})

// PUT METHOD
app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=> person.id === Number(id))
    if(!person) {
        return res.status(400).json({success:false,msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})

//HERE THE SERVER
app.listen(5000, () => {
  console.log('server listening on port 5000...');
});
