const express = require('express');
const bodyParser = require('body-parser');
const hb = require('express-handlebars');

let app = express();

/*handlebars*/
app.engine('handlebars', hb({ defaultLayout: 'main' })); //so that handlebar files can be used
app.set('view engine', 'handlebars');

app.use(express.static("public"));
// app.use(bodyParser.json());


const ViewRouter = require('./ViewRouter');

app.use('/',new ViewRouter().router()); // only requests to '/' will be sent to new router





app.listen(8080,()=>{
    console.log("Application started at port:8080");
});