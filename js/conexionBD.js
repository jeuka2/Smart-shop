const mongoose = require('mongoose');

// URL de conexión a tu base de datos MongoDB
const mongoURI = 'mongodb://localhost:27017/superMArket';

// Conexión a la base de datos
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB exitosa');
})
.catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
});
