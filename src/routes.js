import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/recipients', RecipientController.store);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.get('/deliveryman', DeliverymanController.index);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
