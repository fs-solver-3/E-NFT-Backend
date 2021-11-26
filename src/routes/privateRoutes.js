import { cache } from 'ejs';
import express from 'express';
import { userController,} from '../controllers';
import * as settings from '../settings';

const privateRoutes = express.Router();

// privateRoutes.post(
//   '/update-profile',
//   userController().validate('update-profile'),
//   userController().cacheMiddleware.deleteProfile,
//   userController().updateProfile
// );

privateRoutes.post(
  '/update-user', 
  userController().updateUser
);

privateRoutes.get(
  '/get-profile',
  userController().cacheMiddleware.getProfile,
  userController().getProfile
);

export { privateRoutes };
