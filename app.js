const express=require('express');
const app=express();

app.use(express.json());

const dotenv=require('dotenv');
dotenv.config();

const colors=require('colors');

const connectDB=require('./utils/db');

(async ()=>
{
    try
    {
        const connection=await connectDB();
        app.use((req,res,next)=>
        {
            req.connection=connection;
            next();
        })

        const taskRoutes=require('./routes/taskRoutes');
        app.use(taskRoutes);

        const PORT=process.env.PORT || 5000;
        app.listen(PORT,console.log(`Server listening on PORT:${PORT}`));
    }
    catch(err)
    {
        console.error('Error starting the server:', err);
    }
})();