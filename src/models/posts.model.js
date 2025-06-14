const db = require('../config/db');

const selecAll = async () => {
    const [result] = await db.query(`SELECT posts.*, autores.nombre, autores.email, autores.imagen 
     FROM posts 
     JOIN autores ON posts.autor_id = autores.id`,);
    return result;
};


const getByAutorId = async (autorId) => {
  const [result] = await db.query(`
    SELECT p.*, a.nombre, a.email, a.imagen
    FROM posts p
    JOIN autores a ON p.autor_id = a.id
    WHERE autor_id = ?
  `, [autorId]);
  return result;
};

const insert = async ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
  const [result] = await db.query(
    'INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)',
    [titulo, descripcion, fecha_creacion, categoria, autor_id]
  );
  return { id: result.insertId, titulo, descripcion, fecha_creacion, categoria, autor_id };
};

module.exports = {
    selecAll, insert, getByAutorId
};
