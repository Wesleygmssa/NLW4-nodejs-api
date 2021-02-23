import { Router } from 'express';
const routes = Router();

routes.use('/', (request, response) => {
    return response.send('Hello');
})




export default routes;