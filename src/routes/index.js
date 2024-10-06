const { Router } = require("express");

const usersRouter = require("./users.routes");

const routes = Router();

routes.use("/users", usersRouter);

// Handle root path
routes.get("/", (req, res) => {
    res.send("API Root");
});

module.exports = routes;