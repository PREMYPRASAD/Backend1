const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('./middleware/mongoDB') // initiate mongodb connection

const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

const userApi = require('./routes/user');
app.use('/api', userApi);

//server code
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})