const express = require('express');
const connectDB = require('./config/dbConfig');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bookRoutes = require('./routes/bookRoutes');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();
connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/books', bookRoutes);

app.use(errorMiddleware);

module.exports = app;
