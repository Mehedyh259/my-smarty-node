const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'hasan', email: 'hasan@gmail.com', phone: '0174589548' },
    { id: 2, name: 'mehedy', email: 'mehedy@gmail.com', phone: '0174589548' },
    { id: 3, name: 'linkon', email: 'linkon@gmail.com', phone: '0174589548' },
    { id: 4, name: 'tushar', email: 'tushar@gmail.com', phone: '0174589548' },
    { id: 5, name: 'soumik', email: 'soumik@gmail.com', phone: '0174589548' },
    { id: 6, name: 'shahadat', email: 'shahadat@gmail.com', phone: '0174589548' }
]

app.get('/', (req, res) => {
    res.send('Hello from my smarty node express. using nodemon auto restart !!');
});
app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users);
    }

    console.log(req.query);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id-1];
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})


app.listen(port, () => console.log('Listening to port', port));