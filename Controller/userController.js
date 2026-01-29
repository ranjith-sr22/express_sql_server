import UserModel from "../Model/usermodel.js";

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const response = await UserModel.createUser(name, email, password);
        res.status(201).json({
            message:"User created successfully",
            userId: response    
        })

    }
    catch (error) {
        res.status(500).json({ message: "Invalid Data" });
    }
}
export const getAllUserController = async (req,res) => {
    try{
        const data = await UserModel.getAllUsersmodel();
        res.json(data)
    }
    catch (error){
        res.status(500).json({ error: error.message});
    }
}
export const updateUserPasswordController = async (req, res) => {
    try{
        const {password} = req.body;
        const updatePassword = await UserModel.updateUsermodel(req.params.id,{password});
        if(!updatePassword){
            res.json({message: "user not found"} )
        }
        else{
            res.json({
                message:"password has been update"
            })
        }
    }catch (err){
        res.status(500).json({error: err.message})
    }
    
}
export const deleteUserController = async (req, res) => {
    try {
        const deletedUser = await UserModel.deleteUserModel(req.params.id);

        if (deletedUser === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Cannot delete user" });
    }
}    