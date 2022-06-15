const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

const host = `localhost`;
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
