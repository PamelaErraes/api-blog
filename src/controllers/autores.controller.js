
const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autores.selecAll();
    res.json(autores);
    
    // Implement your logic here
}

const create = async (req, res) => {
    // Implement your logic here
    const result = await Autores.insert(req.body);
    res.json(result)

}


module.exports = { getAll, create };