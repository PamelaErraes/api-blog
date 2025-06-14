
const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autores.selecAll();
    res.json(autores);

}

const create = async (req, res) => {
 
    const result = await Autores.insert(req.body);
    res.json(result)

}


module.exports = { getAll, create };