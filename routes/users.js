const express = require('express');

const router = express.Router();

//Array to example
let userExample = [{
    "name": 'ronny',
    "age": 23,
    "gender": 'm'
},
{
    "name": 'steven',
    "age": 22,
    "gender": 'm'
},
];

//Get all users 
router.get('/', (req, res) => res.send(userExample));

//Insert a new user
router.post('/', (req, res) => {
    const user = req.body;
    userExample.push(user);
    res.send(`New user: ${user.name}`);
});

//Get user by name
router.get('/:name',(req,res) =>{
    const {name} = req.params;
    let userByName = userExample.find(element => element.name == name);
    res.send(userByName);
});

//Delete by name
router.delete('/:name',(req,res) =>{
    const {name} = req.params;
    userExample = userExample.filter(element => element.name != name);
    res.send(userExample);
});

//Update by name
router.patch('/:name', (req,res) =>{
    const {name} = req.params;
    const {age,gender} = req.body;

    const user = userExample.find(element => element.name == name);

    if(age) user.age = age;
    if(gender) user.gender = gender;

    res.send('The user was uptaded');

});

module.exports = router;