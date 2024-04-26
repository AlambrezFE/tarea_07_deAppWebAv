const express = require('express');
const app = express();

app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');

//insertar codigo:



app.listen(3000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 3000')
});