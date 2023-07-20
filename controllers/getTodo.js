const Todo = require('../model/Todo');

exports.getTodo = async (req,res) => {
    try{
       const data = await Todo.find({});
       res.status(200).json({
        success: true,
        data: data,
        message: 'Todo was successfully finded'
       })
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: 'Ineternal error',
        })
    }
}

exports.getTodoId = async (req,res) => {
    try{
       const id = req.params.id;
       const findData = await Todo.findById({_id:id});
       if(!findData){
        res.status(404).json({
            success: false,
            data: findData,
            message: 'Todo was Not find data',
           })
       }
       res.status(200).json({
        success: true,
        data: findData,
        message: 'Todo was successfully find data',
       })
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: 'Ineternal error',
        })
    }
}