import {Request, Response} from 'express'
import { connect } from '../database';
export const postHistoria= async(req:Request, res:Response)=>{
  const {titulo, descripcion, imgPath, username}=req.body
  const conn=await connect()
  const query=await conn.query(`INSERT INTO historia (titulo, descripcion, imgPath, username) VALUES ('${titulo}', '${descripcion}','${imgPath}','${username}')`)
  return res.json(req.body);
   
}

export const putHistoria=async(req:Request, res:Response)=>{
  const {id}= req.params
  const {titulo, descripcion, imgPath, username}=req.body
  const conn= await connect()
  const query= await conn.query(`UPDATE historia set titulo="${titulo}", descripcion="${descripcion}", imgPath="${imgPath}", username="SorayaSanchez" WHERE id=${id}`)
  return res.json(req.body); 
}

export const getHistorias= async(req:Request, res:Response)=>{
  const conn= await connect()
  const query= await conn.query('SELECT * FROM historia')
 console.log(query[0]);
  return res.json(query[0]); 
}

export const getHistoria= async (req:Request, res:Response)=>{
  const {id}= req.params
  const conn= await connect()
  const query= await conn.query(`SELECT * FROM historia WHERE id=${id}`);
 return  res.json(query[0]);
}

export const deleteHistoria= async (req:Request, res:Response)=>{
  const {id}= req.params
  const conn= await connect()
  await conn.query(`DELETE FROM historia WHERE id=${id}`);
  return res.json({message:`id ${id} eliminado`});
}