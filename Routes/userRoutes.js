import {createUser,deleteUserController,getAllUserController, updateUserPasswordController} from "../Controller/userController.js";
import express from 'express';
const userRouter = express.Router();
userRouter.post('/signup', createUser);
userRouter.get('/getusers', getAllUserController);
userRouter.put('/updatepass/:id',updateUserPasswordController)
userRouter.delete('/delete/:id',deleteUserController)


export default userRouter;                                                                                   