import express from "express";
import dbConnection from "./db.config/db.config.js";
import bodyParser from "body-parser";

const app = express();
let db = null;
const PORT =3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,()=>{
    console.log("connected db");
})
export default dbConnection;