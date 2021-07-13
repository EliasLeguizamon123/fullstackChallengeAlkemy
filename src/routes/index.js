const {Router} = require('express');
const router = Router();
const mysql = require('mysql');

//MYSQL CONNECTION
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: '3306'
});

connection.connect((err) =>{
    if(err){
        console.log(err);
    } else{
        console.log(`DB connected correctly..`);
    }
});

router.get('/', (req, res) => {
    res.json('Hello world')
})


module.exports = router;