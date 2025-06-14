const Posts = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Posts.selecAll();
    res.json(posts);
    
  
}


const getPostsByAutor = async (req, res) => {
  const { id } = req.params;
  const posts = await Posts.getByAutorId(id);
  res.json(posts);
};

const create = async (req, res) => {
    const result = await Posts.insert(req.body);
    res.json(result)

}


module.exports = { getAll, create, getPostsByAutor };