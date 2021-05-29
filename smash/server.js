const express = require("express");
const session = require("express-session");
const http = require("http");
const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);

const cors = require("cors");
const corsOptions = {
    origin: [
      "http://localhost:3000",
      "http://localhost/8000/auth/google/callback",
    ],
    methods: ["GET", "PUT", "POST"],
    optionsSuccessStatus: 200,
  };

const passport = require("passport");
app.use(passport.initialize());
app.use(
    session({
      secret: "supersecret",
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
    console.log("app running on:", PORT);
});