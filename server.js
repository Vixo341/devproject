const express = require('express');
const mongoose = require('mongoose');



// path to files
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

//db config
const db = require('./config/keys').mongoURI;


//connect
mongoose.connect(db)
.then(() => console.log('db connected'))
.catch(err => console.log(err));

// some massage on start
app.get('/', (req, res) => res.send('test'));




//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);


const port = process.env.port || 5000;

app.listen(port, () => console.log('server running on port ${port}'));

