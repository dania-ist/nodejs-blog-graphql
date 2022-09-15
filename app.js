const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const { authenticate } = require("./middlewares/auth");

dotenv.config();

const PORT = process.env.PORT || 8000;
// express app
const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authenticate);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log("server is working");
  });
});
