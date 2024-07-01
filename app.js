import express  from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


import auth from './routes/auth.route.js'


app.use('/api/v1/auth', auth);



export {app};