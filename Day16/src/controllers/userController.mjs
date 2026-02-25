import userModel from "../models/userModel.mjs";
import uploadFile from "../aws/uploadFile.mjs";
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const files = req.files;
        if(!files || files.length === 0){
            return res.status(400).send({ message: "failed", error: "Profile picture is required" });
        }
        const profilePicture = await uploadFile(files[0]);
        if(!profilePicture){
            return res.status(500).send({ message: "failed", error: "Failed to upload profile picture" });
        }
        const user = await userModel.create({ name, email, password, profilePicture });
        return res.status(201).send({ message: "success", user: user });
    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ message: "failed", error: error.message });
        }
        else if (error.message.includes("duplicate")) {
            return res.status(400).send({ message: "failed", error: error.message });
        } else {
            return res.status(500).send({ message: "failed", error: error.message });
        }
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({ isDeleted: false });
        return res.status(200).send({ message: "success", users: users });
    } catch (error) {
        return res.status(500).send({ message: "failed", error: error.message });
    }
};

export { createUser, getUsers };