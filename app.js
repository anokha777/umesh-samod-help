const express = require('express');
const helmet = require('helmet');
let cors = require("cors");

const helpRouter = require('./src/routers/helpRouter');

const app = express();
app.use(cors());
app.use(helmet());
const port = process.env.PORT || 8080;

//Body Parser middleware
app.use(express.json()); 
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', helpRouter);

app.use('/', (req, res) => {
  res.send('Server OK!!!');
})

app.use((error, req, res, next) => {
  if (error) res.status(500).send({ statusCode: error.statusCode, msg: error.error.msg });
  next();
});

app.use((req, res) => {
  res.status(404).send('NOT Found.');
});

app.listen(port, () => {
  console.log('Service listening at port- ', port);
});