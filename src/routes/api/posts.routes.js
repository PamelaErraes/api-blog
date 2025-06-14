
const router = require('express').Router();
const { getAll, create, getPostsByAutor} = require('../../controllers/posts.controller');


router.get('/', getAll);
router.get('/autor/:id', getPostsByAutor);
router.post('/', create);

// Define your routes here

module.exports = router;