// Get all tasks
const getAll=(req,res)=>
{
    const query="SELECT * FROM tasks";
    req.connection.query(query,(err,tasks)=>
    {
        if(err)
        {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(tasks);
    })
}

//Create new task
const createNew=(req,res)=>
{
    const { task_name } = req.body;
    // console.log(req.body);
    const query = 'INSERT INTO tasks (task_name) VALUES (?)';
    req.connection.query(query, [task_name], (err, result) => {
        if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
        }
        res.status(201).json({ id: result.insertId, task_name, completed: false });
    });
}

//Update task
const updateTask=(req,res)=>
{
    const { id } = req.params;
    const { task_name, completed } = req.body;
    const query = 'UPDATE tasks SET task_name = ?, completed = ? WHERE id = ?';
    req.connection.query(query, [task_name, completed, id], (err, result) => {
        if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
        }
        res.json({ id, task_name, completed });
    });
}

//Delete task
const deleteTask=(req,res)=>
{
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE id = ?';
    req.connection.query(query, [id], (err, result) => {
        if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
        }
        res.json({ message: 'Task deleted successfully!' });
    });
}

module.exports={getAll,createNew,updateTask,deleteTask};