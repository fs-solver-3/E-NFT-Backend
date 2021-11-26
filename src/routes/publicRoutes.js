import express from 'express';
import { 
  userController, 
  marketplacelistController, 
  nftitemController, 
  karenController 
} from '../controllers';
import * as settings from '../settings';

const publicRoutes = express.Router();

publicRoutes.post('/signup', userController().validate('signup'), userController().signUp);
publicRoutes.post('/login', userController().validate('login'), userController().login);
publicRoutes.post(
  '/request-forgot-password',
  userController().validate('request-forgot-password'),
  userController().requestForgotPassword
);
publicRoutes.post(
  '/submit-forgot-password',
  userController().validate('submit-forgot-password'),
  userController().submitForgotPassword
);
publicRoutes.post('/refresh-access', userController().validate('refresh-access'), userController().refreshAccess);
publicRoutes.post('/login-username', userController().validate('login-username'), userController().loginUsername);

publicRoutes.get(
  '/user/:username',
  userController().cacheMiddleware.getProfileByUserName,
  userController().getProfileByUserId
);

// Marketplace
publicRoutes.get("/marketplace-list", marketplacelistController().marketplacelist);
publicRoutes.post("/marketplace-list-sort", marketplacelistController().marketplacelist_sort);

publicRoutes.post("/crypto", marketplacelistController().marketplacelist_crypto);
publicRoutes.post("/visa", marketplacelistController().marketplacelist_visa);

// Marketplace pagination
publicRoutes.post("/current-page", marketplacelistController().findAllCurrentPage);

// Superbuddha
publicRoutes.post("/buy-nft-item", nftitemController().buyNFTitem);

// Karen
publicRoutes.post("/buy-karen", karenController().buyKaren);

export { publicRoutes };
