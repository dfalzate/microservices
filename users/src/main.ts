import 'module-alias/register';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.status(200).send('Hello world');
});

const PORT=process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err));
