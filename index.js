const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');
const notFound = require('./middleware/notFound');
const app = express();
app.use(express.json());

connectDB();


app.get('/hello',(req,res)=>{
    res.send('task manager app');
})
app.use('/api/v1/tasks',tasks);
app.use(notFound);

/*app.get('/api/v1/tasks',(req,res))
app.post('/api/v1/tasks',(req,res))
app.get('/api/v1/tasks/:id',(req,res))
app.patch('/api/v1/tasks/:id',(req,res))
app.delete('/api/v1/tasks/:id',(req,res))*/


app.listen(3000,()=>{console.log("at 3000")})