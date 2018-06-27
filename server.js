// const express = require("express");
// const bodyParser = require("body-Parser");
// const cookieParser = require("cookie-Parser");
// const MongoClient = require("mongodb");
// const assert = require("assert");

// const app = express();
// const port = 3001;
// const mongoUrl =
//   "mongodb://ddante93:dragon21@ds016718.mlab.com:16718/carproject";
// let dbName = "carproject";
// let db = null;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// // add more routers here
// MongoClient.connect(
//   mongoUrl,
//   function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     db = client.db(dbName);
//   }
// );

// app.get("/api/vins", (req, res) => res.send("audi A6"));
// app.post("/api/vins", (req, res) => {
//   db.collection("carproject")
//     .insertOne(req.body)
//     .then(result => {
//       const id = result.insertedId.toString();
//       res.status(201).json({ id: id });
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

// app.use((req, res) => {
//   console.log(req);
//   res.sendStatus(404);
// });

// app.listen(port, () => console.log(`magic happens on port ${port}`));
// ***********************************************new

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongo = require("./app/mongodb.connection");
const cors = require("cors");
const MongoClient = require("mongodb");
const assert = require("assert");
const router = require("./app/routes/index");
const app = express(); //creates a server
const port = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const corsConfig = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  credentials: true,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Cookie",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsConfig));

app.use(router);
//server runs through all options and was unable to find match. so it returns 404
app.use((req, res) => {
  console.log(req);
  res.sendStatus(404);
});

// app.listen(port, () => {
//   console.log(`Magic happens on port ${port}`);
// });
mongo
  .connect(
    process.env.MONGODB_URL,
    process.env.DATABASE_NAME
  )
  .then(initializeServer)
  .then(() => console.log(`Magic happens on port: ${port}`))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function initializeServer() {
  if (process.env.HTTPS === "true") {
    return https.createServer(certOptions, app).listen(port);
  } else {
    return app.listen(port);
  }
}
