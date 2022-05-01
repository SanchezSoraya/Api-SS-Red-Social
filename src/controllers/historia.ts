import {Request, Response} from 'express'
import { connect } from '../database';
export const postHistoria= async(req:Request, res:Response)=>{
  const {titulo, descripcion, imgPath, username}=req.body
  const conn=await connect()
  const query=await conn.query(`INSERT INTO historia (titulo, descripcion, imgPath, username) VALUES ('${titulo}', '${descripcion}','${imgPath}','${username}')`)
  return res.json(req.body);
   
}

export const putHistoria=(req:Request, res:Response)=>{
 return res.json('Hola mundo'); 
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