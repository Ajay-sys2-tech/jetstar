const express = require("express");
const app = express();

const hbs = require("hbs");
const path = require("path");

require('dotenv').config();

const dbConnection = require("./db/conn");
const user = require("./models/user");
const port = process.env.PORT || 3000;


const static_path = path.join(__dirname, "/public");



app.use(express.static(static_path));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


const paymentRoutes = require("./routes/payment");
app.use("/payment", paymentRoutes);

const routes = require("./routes/user");
app.use("/", routes);





app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});