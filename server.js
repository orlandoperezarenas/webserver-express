const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers.js');
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

//creo los parciales
hbs.registerPartials(__dirname + '/views/partials');
//expres hbs para renderisar
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'orlando',
        // anio: new Date().getFullYear(),
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        // nombre: 'Orlando',

    });

});


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${ port}`);
})