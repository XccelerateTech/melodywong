const express = require('express');
const bodyParser = require('body-parser');
const hb = require('express-handlebars');
const methodOverride = require('method-override');
const knexConfig= require('./knexfile').development;
const knex= require('knex')(knexConfig);

let app = express();

/*handlebars*/
app.engine('handlebars', hb({ defaultLayout: 'main' })); //so that handlebar files can be used
app.set('view engine', 'handlebars');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

const ViewRouter = require('./ViewRouter');
const NotesRouter = require('./notes-router');
const NotesService = require('./notes-service')

let notesService = new NotesService(knex);

app.use('/',new ViewRouter().router()); // only requests to '/' will be sent to new router
app.use('/api/notes',new NotesRouter(notesService).router());




app.listen(8080,()=>{
    console.log("Application started at port:8080");
});