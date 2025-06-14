
const router = require('express').Router();

const { getAll, create,  } = require('../../controllers/autores.controller');
// Define your routes here

//GET /api/autores
router.get('/', getAll);
router.post('/', create);





module.exports = router;