import express from 'express';

//env variables
import { PORT, NODE_ENV } from './config/env.js';

// Database
import connectToDatabase from './database/mongodb.js';

// Routes
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('API running')
})

app.listen(PORT, async () => {
    console.log(`${NODE_ENV.toUpperCase()} server running on port: http://localhost:${PORT}`)

    await connectToDatabase();
})