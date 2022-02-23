import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

// endpoints
app.use('/users', routes.user);

export default app;
