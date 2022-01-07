const express = require('express');
const router = express.Router();
let { people } = require('../data');
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// // GET method
// router.get('/', getPeople);
// // POST METHOD
// router.post('/', createPerson);
// router.post('/postnam', createPersonPostman);
// // PUT METHOD
// router.put('/:id', updatePerson);
// //Delete method
// router.delete('/:id', deletePerson);


// TODO : ANOTHER WAY TO DEFINE YOUR ROUTES

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
