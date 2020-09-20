const express = require("express");
const hbs = require("hbs");
require('./hbs/helpers');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (_, res) => {
    res.render("home", {
        nombre: "sara loredo"
    });
});

app.get("/about", (_, res) => {

    res.render("about");
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));