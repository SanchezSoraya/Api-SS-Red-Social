import express, { Application } from 'express'; 
import morgan from 'morgan'; 
import {router} from './routes/routes'; 

export const app:Application= express()
//Setting 
app.set('PORT', 3000); 
//midleware
app.use(express.json());
app.use(morgan('dev'));
//routes
app.use('',router)
