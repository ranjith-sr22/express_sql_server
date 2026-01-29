import {createUser} from "../Controller/userController.js";
import express from 'express';
const userRouter = express.Router();
userRouter.post('/signup', createUser);

export default userRouter;                                                                                   