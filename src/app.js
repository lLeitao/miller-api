import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json( {
    limit: '10mb', 
    extended: true
}));

app.use(express.urlencoded());

// Middlewares

// Routes
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`));

export default app;