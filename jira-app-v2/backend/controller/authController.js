const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.register = async (request, response) => {
    try {
        const {userId, userName, password, dob, designation} = request.body;
        const userExist = await User.findOne({userID});
        if(userExist) {
            return response.status(400).json({msg: "User already exists..."});
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const user = new User({userId, userName, password, dob, designation});
        await user.save();
    } catch (error) {
        console.log("Failed to register new user...");
        response.status(500).json({msg: error.message});
    }
}

exports.login = async (request,response) => {

}