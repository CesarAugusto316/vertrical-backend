import express from 'express';


export const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: 'ping pong'
  });
});
