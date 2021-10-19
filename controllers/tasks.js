const Task=require('../model/tasks');
const getAllTasks=async (req,res)=>{
    const tasks =await Task.find()
    res.send(tasks);
}
const createTasks=async (req,res)=>{
    const task = new Task(req.body);
    const saved=await task.save();

    res.json(saved);
}
const getTasks=async (req,res)=>{

    const task=await Task.findById(req.params.id);
    res.json(task);
}
const updateTasks=async (req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json(task);
}
const deleteTasks=async (req,res)=>{
    const id = req.params.id;
    const task = await Task.findOneAndDelete(id);
    res.json(task);
}


module.exports={getAllTasks,
createTasks,
getTasks,
updateTasks,
deleteTasks
};