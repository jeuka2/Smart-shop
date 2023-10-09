const mongoose = require('mongoose');

//esquema de Usuario
const usuarioSchema = new mongoose.Schema({
   nombre: String,
   correo: String,
   contraseña: String
});

// Define el modelo de Usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

//esquema de Producto
const productoSchema = new mongoose.Schema({
   nombre: String,
   precio: Number,
   descripcion: String,
   cantidad: Number,
   promocion: Boolean
});

// Define el modelo de Producto
const Producto = mongoose.model('Producto', productoSchema);

// Exporta los modelos para su uso en otros archivos
module.exports = {
   Usuario: Usuario,
   Producto: Producto
};
