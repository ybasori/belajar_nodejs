const express = require('express');
var engine = require('ejs-locals');
const app = express();

// set up template engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

//route to controller
require('./routes/web')(app);

app.listen('3000', ()=> {
    console.log('server started on port 3000');
});