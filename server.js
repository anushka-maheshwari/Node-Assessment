const express=require("express");
const app=express();

//EJS

const expresslayouts=require("express-ejs-layouts");
app.use(expresslayouts);
app.set('view engine','ejs');

// Express body parser
app.use(express.json());

//ROUTES
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/user'));




//PORT
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`server is running at port ${port}`)})