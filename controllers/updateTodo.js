const Todo = require('../model/Todo');

exports.updateTodo = async (req,res) => {
    try{
        const {title,body,discription} =  req.body;
        const {id} = req.params;
        const updateData = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,body,discription}
        )
        res.status(200).json({
            success: true,
            data: updateData,
            message: 'Updated'
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}