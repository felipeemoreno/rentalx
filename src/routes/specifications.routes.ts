import { Router } from 'express';

import { CreateSpecificationsController } from '../modules/cars/useCases/createSpecifications/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.post('/', createSpecificationsController.handle);

specificationRoutes.get('/', listSpecificationsController.handle);

export { specificationRoutes };
