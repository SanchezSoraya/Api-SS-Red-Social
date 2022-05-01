import {app} from './app'; 
const main = ()=> {
  const port = app.get('PORT')

  app.listen(port, ()=>{
    console.log(`servidor funcionando en el puerto ${port}`);

  });
}
main();