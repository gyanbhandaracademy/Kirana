import express from "express";
import { registerController, LoginController, TestController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', LoginController)

//test Route
router.get('/test', requireSignIn,isAdmin, TestController)


export default router