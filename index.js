const express=require('express');
const port=8000;
const ejs=require('ejs');
const path=require('path')
const app=express();

const expressLayouts=require('express-ejs-layouts')
// const db=require("./config/mongoose")

// set up the view engine
app.set("view engine","ejs");
// app.set('views','./views');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('./assets'))
app.use(expressLayouts);



// extract style and script from sub pages in to layout
app.set('layout extractStyles',true);
app.set('layout extractScript',true);
// use express router
app.use('/',require('./routes/index'));




app.listen(port,function(err)
{
    if(err)
    {
        console.log('Error',err);
    }
    console.log("server is running on port no.",port);
})