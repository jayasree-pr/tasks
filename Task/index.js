const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error')
const app = express();
app.use(express.json());

connectDB();


app.get('/hello',(req,res)=>{
    res.send('task manager app');
})
app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorHandler);



app.listen(3000,()=>{console.log("at 3000")})