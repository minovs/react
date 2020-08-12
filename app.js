const express = require("express")
const bodyParser = require("body-parser");
/*
const path = require("path");
const staticAsset = require("static-asset");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cookieParser = require("cookie-parser");

const config = require("./config");
*/
const routes = require("./api");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes);
/*
const sessionStore = new MySQLStore(config.OPTION_DB);

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");


app.use(cookieParser());
app.use(staticAsset(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/javascripts",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);
app.use(
  "/javascripts-ui",
  express.static(path.join(__dirname, "node_modules", "jquery-ui-dist"))
);
app.use(
  "/javascripts-cookie",
  express.static(path.join(__dirname, "node_modules", "jquery.cookie"))
);

app.use("/", routes);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render("error", {
    message: error.message,
    error: !config.IS_PRODUCTION ? error : {}
  });
});
*/
app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`)
)
