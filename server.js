let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(expresss.urlencoded({extended:true}))
app.use(express.json());
//app.use(express.static("/public"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let route = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("http://localhost:" + PORT);
})