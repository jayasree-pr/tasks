require('express-async-errors')
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error');
const productsRouter = require('./routes/products')
// middleware
app.use(express.json());
connectDB();

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use('/api/v1/products', productsRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(4000,()=>{console.log("at 4000")})