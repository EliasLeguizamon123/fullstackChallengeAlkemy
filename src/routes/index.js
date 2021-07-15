const {Router} = require('express');
const router = Router();
const mysql = require('mysql');

//MYSQL CONNECTION
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306
});

connection.connect((err) =>{
    if(err){
        console.log(err);
    } else{
        console.log(`DB connected correctly..`);
    }
});

//Set connection every 5 second's
setInterval(()=>{
    connection.query('SELECT 1');
}, 5000);

//* Route to get All forms
router.get('/', (req, res) => {
    connection.query(`SELECT * FROM form`, (err, rows) => {
        if(!err){
            res.json(rows)
        }else{
            throw err;
        }
    })
})

//* Route to post new Form
router.post('/new', (req, res) => {
    const {ID, concept, amount,  isType, category} = req.body
    connection.query(`INSERT INTO form VALUES(?, ?, ?, ?, ?, ?)`,
     [ID, concept, amount, new Date(), isType, category], 
        (err, rows) => {
            if(err){
                throw err;
            } else{
                console.log('New form creating succesfuly');
                res.json(rows)
            }
            
        });
});

//* Route to delete an existing Form
router.delete('/:id', (req, res) => {
    const {ID} = req.body
    connection.query(`DELETE FROM form WHERE ID = ?`, ID, (err, rows) => {
        err ? res.json(rows) : console.log(err);
    })
})

module.exports = router;