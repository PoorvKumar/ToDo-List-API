const express=require('express');
const router=express.Router();

const taskController=require('../controllers/taskController');

router.get('/tasks',taskController.getAll);
router.post('/tasks',taskController.createNew);
router.put('/tasks/:id',taskController.updateTask);
router.delete('/tasks/:id',taskController.deleteTask);

module.exports=router;