const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const mongoose = require('mongoose');
var routes = require('./routes');
// const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);




var connectionPromise = null;

var mongooseProps = {
   
    auto_reconnect: true,
    reconnectInterval: 5000,
    reconnectTries: Infinity,
    poolSize: 100,

}
mongoose.connection.on('open', () => {
   console.log("MongoDB is connected");
});

mongoose.connection.on('error', (err) => {
    // log.error(err);
    connectionPromise = null;
    mongoose.disconnect();
});

mongoose.connection.on('disconnected', (err) => {
    // log.debug("MongoDB is disconnected");
    connectionPromise = null;
    setTimeout(() => {
        // log.debug("MongoDB reconnection attempt");
        mongoose.connect("mongodb://127.0.0.1:27017/todos", mongooseProps);
    }, 60 * 1000); // reconnect in 1 minute
});

mongoose.connect("mongodb://127.0.0.1:27017/todos", mongooseProps);
// mongoose.connection('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// })

// todoRoutes.route('/').get(function(req, res) {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(JSON.stringify(todos));
//             res.json(todos);
//         }
//     });
// });

// todoRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// todoRoutes.route('/add').post(function(req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// app.use('/todos', todoRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});