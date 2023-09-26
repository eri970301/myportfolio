const express = require('express');
const path = require('path');
const app = express();
let rutaMain = require('./routers/main')

app.use(express.static('public'))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', rutaMain)

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Servidor en puerto 3000')
})
