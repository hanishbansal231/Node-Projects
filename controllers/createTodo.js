const Todo = require('../model/Todo');

exports.createTodo = async (req,res) => {
    try{
        const {title,body,discription} = req.body;
        const response = await Todo.create({title,body,discription});
        res.status(200).json({
            success: true,
            data: response,
            message: 'Todo created successfully',
        })
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: 'Ineternal error',
        })
    }
}