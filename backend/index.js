import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRouter.js';
import animalRoutes from './routes/animalRouter.js';
import orderRoutes from './routes/orderRouter.js';
import ticketRoutes from './routes/ticketRouter.js';
import treatmentRoutes from './routes/treatmentRouter.js';
import dashboardRoutes from './routes/dashboardRouter.js';
import cors from 'cors';

//configure env
dotenv.config();

//rest object
const app = express();

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/animal',animalRoutes);
app.use('/order',orderRoutes);
app.use('/ticket',ticketRoutes);
app.use('/treatment',treatmentRoutes);
app.use('/dashboard',dashboardRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome To Ecommerce App</h1>");
    // res.send({
    //     message: "Welcome To Ecommerce App"
    // });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running On ${process.env.DEV_MODE} mode and on ${PORT} Port`.bgCyan.white);
})