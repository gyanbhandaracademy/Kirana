import express from "express";
import { registerController, LoginController, TestController, ForgotPasswordController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', LoginController)

//Forgot Password || POST
router.post('/forgot-password', ForgotPasswordController)

//test Route
router.get('/test', requireSignIn, isAdmin, TestController)

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})


export default router