const express = require('express');
const { usersRouter } = require('./routes/usersRoutes');
const { transferenceRouter } = require('./routes/transferencesRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transferences', transferenceRouter);

module.exports = { app };
