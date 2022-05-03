import express, { Application } from 'express'; 
import morgan from 'morgan'; 
import {router} from './routes/routes'; 
import cors from 'cors';


export const app:Application= express()
//Setting 
app.set('PORT', 3000); 
//midleware
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('',router)
