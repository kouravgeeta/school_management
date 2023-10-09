import  mysql2 from "mysql2/promise";

const host = "localhost";
const user = "root";
const password ="geeta123";
const database = "school_management";

const dbConnection = await mysql2.createConnection(
    {
    host,user,password,database
    },
   
).then((conn)=>{
    return conn
})

export default dbConnection;