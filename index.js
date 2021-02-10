const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = app;