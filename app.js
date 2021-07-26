const express = require('express');
const path = require('path');
const {v4} = require('uuid');
const app = express();

let CONTACTS = [
    {id: v4(), name: 'Александр', value: '+375 33 382-20-11', marked: false}
]

app.use(express.json()); // мидлвэер для работы с json

// GET
// GET
app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000)
})

// POST
app.post('/api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

// DELETE
app.delete('/api/contacts/:id', (req,res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message : 'Контакт был удален!'})
})

app.put('/api/contacts/:id', (req,res) => {
    const idx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[idx] = req.body;
    res.json(CONTACTS[idx]);
})

app.use(express.static(path.resolve(__dirname, 'client')));
app.get('*', (req, res) => {
    res.sendFile(__dirname, 'client', 'index.php');
})

app.listen('3000', ()=> {
    console.log('Сервер был запущен на порту 3000...');
})



