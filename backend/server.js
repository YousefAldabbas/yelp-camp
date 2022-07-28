const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const colors = require("colors");
const app = express();
const PORT = process.env.PORT || 3000;
const corsRoute = require("simple-cors");
const  errorHandler  = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();
app.use('/public/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors(
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRouter"));
app.use("/api/campgrounds", require("./routes/campRouter"));
app.use("/api/comments", require("./routes/commentRouter"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);
app.listen(PORT, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
