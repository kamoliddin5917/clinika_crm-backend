const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/server");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/router"));

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
