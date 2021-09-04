const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const ApiRoutes = require("./routes/ApiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", ApiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening port number ${PORT}`);
    });
});
