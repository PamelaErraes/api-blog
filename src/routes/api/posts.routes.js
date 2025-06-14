
const router = require('express').Router();
const { getAll, create, getPostsByAutor} = require('../../controllers/posts.controller');


router.get('/', getAll);
router.get('/autor/:id', getPostsByAutor);
router.post('/', create);



module.exports = router;