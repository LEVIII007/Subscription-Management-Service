import express from 'express';
import authRouter from './routes/auth.route.js';

const app = express();

// Use the auth router
app.use(authRouter);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});