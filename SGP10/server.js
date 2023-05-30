const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    res.json({message:"Hello World"});
});

require("./SGP10/routes/SG_Ptoilet.routes.js")(app);

app.listen(4000, ()=>{
    console.log("Server is running on port 4000.");
})