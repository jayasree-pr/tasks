const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error');
// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(4000,()=>{console.log("at 4000")})