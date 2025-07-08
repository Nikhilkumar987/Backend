import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello this is home route");
});

app.get('/nikhil', (req, res) => {
  res.send(`This is Nikhil listening on ${port} port`);
});

app.listen(port, () => {
  console.log(`This app is listening on port number ${port}`);
}); ``   
