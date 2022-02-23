import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

// endpoints
app.use('/users', routes.user);
app.use('/login', routes.login);

export default app;
