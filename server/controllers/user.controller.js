import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(username, email);

    let secpassword = await bcrypt.hash(password, 10)

    try {
        const newUser = await User.create({
            username : username,
            email:email,
            password: secpassword
        })
        console.log(newUser);
        newUser.save();
        res.status(200).json({success:true})
    } catch (error) {
        res.status(500).json({success:false})
    }
}

export const Login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);
    const jwtSecret = "grishaisthegreateilove myselfthemost"

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(400).send({ message: 'Invalid details' });
        }
        console.log(user);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        
        if (!isMatch) {
            console.log("not matched");
            return res.status(400).send({ message: 'Invalid details' });
        }

        const data = {
            user: {
                id: user._id
            }
        };

        const authToken = jwt.sign(data, jwtSecret);

        // console.log("my auth token is " + authToken)

        return res.status(200).json({ token : authToken });

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}