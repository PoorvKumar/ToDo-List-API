const mysql=require('mysql');

const connectDB=async ()=>
{
    try
    {
        const connection =await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
          });
          
          connection.connect((err) => {
            if (err) {
              console.error('Error connecting to the database:', err);
              return;
            }
            console.log('Connected to MySQL database!'.red.underline);
          });

          return connection;
    }
    catch(err)
    {
        console.log(`Error:${err.message}`);
        process.exit();
    }
}

module.exports=connectDB;