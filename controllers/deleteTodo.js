const Todo = require('../model/Todo');

exports.deleteTodo = async (req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json(({
            success: true,
            message: 'todo deleted successfully',
        }))
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}