import mysql from "mysql2/promise";

// export const db= mysql.createPool({
//     host: "localhost",
//     user:"root",  
//     password:"Password@123",
//     database:"nextjsdb"
// });
export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Password@1",
    database: "hospitaldb"
});
try{

const connection = await db.getConnection();
console.log("Database connected successfully");
connection.release();
}catch(error){
    console.error("Error connecting to the database:", error);
    process.exit(1);
}

