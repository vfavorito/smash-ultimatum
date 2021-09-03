const express = require("express");
const session = require("express-session");
const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const passport = require("passport");
const passportRoutes = require("./routes/passportRoutes");
const userRoutes = require("./routes/userRoutes");
const arenaRoutes = require("./routes/arenaRoutes");
const tournamentRoutes = require("./routes/tournamentRoutes");
const cors = require("cors");
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost/8000/auth/google/callback",
    "https://smash-ultimatum.herokuapp.com/",
    "https://smash-ultimatum.herokuapp.com/auth/google/callback"
  ],
  methods: ["GET", "PUT", "POST"],
  optionsSuccessStatus: 200,
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "supersecret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static("client/build"));

app.use(passport.initialize());
app.use(passport.session());
app.use(passportRoutes);
app.use(userRoutes);
app.use(arenaRoutes);
app.use(tournamentRoutes);
app.use(cors(corsOptions));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Smash-Ultimatum", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
server.listen(PORT, () => {
  console.log("app running on:", PORT);
});