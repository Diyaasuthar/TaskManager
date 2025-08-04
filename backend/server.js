import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js';

const app = express();
const PORT = process.env.PORT || 4000;


//MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB CONNECT
connectDB();

//ROUTES
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});