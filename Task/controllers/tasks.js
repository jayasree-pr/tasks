const Task=require('../model/tasks');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks =await Task.find()
    res.send(tasks);
})


const createTasks=asyncWrapper(async (req,res)=>{
    const task = new Task(req.body);
    
    const saved=await task.save();

    res.json(saved);
})


const getTasks=asyncWrapper(async (req,res,next)=>{

    const task=await Task.findById(req.params.id);
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404))
      }
    res.json(task);
})


const updateTasks=asyncWrapper(async (req,res,next)=>{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body);
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404))
      }
    res.json(task);
})


const deleteTasks=asyncWrapper(async (req,res,next)=>{
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
        return next(createCustomError(`No task with id : ${req.params.id}`, 404))
      }
    res.json(task);
})


module.exports={getAllTasks,
createTasks,
getTasks,
updateTasks,
deleteTasks
};