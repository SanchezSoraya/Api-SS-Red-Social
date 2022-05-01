import {createPool} from 'mysql2/promise'
import { PoolOptions } from 'mysql2/typings/mysql'

export const connect=async()=>{
 const config:PoolOptions={
  host:'localhost',
  user:'root',
  password:'',
  database:'red_social'

 }
  return await createPool(config); 

}