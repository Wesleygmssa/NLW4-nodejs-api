import express, { response } from 'express';
import routes from './routes';

const app = express();
app.use(routes);// ordem linear



//create server
app.listen('3333', () => {
    console.log('project started 🚀');
});



/*
*GET
*POST
*PUT
*DELETE
*PATCH
*/
