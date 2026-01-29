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