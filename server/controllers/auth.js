import jwt  from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js' 

export const signup = async (req, res) => {
    const {name, email, password} = req.body; 
    // so we need name, email and pass in sign up page therefore we are structuring them here\
    try{
        const existinguser = await users.findOne({email});  //check if the user already exists or not 
        if(existinguser){
            return res.status(404).json({message:"User already exist."})//if user already exists this mssg will be shown
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({name, email, password: hashedPassword})//creates new user 
        const token = jwt.sign({email: newUser.email, id: newUser._id}, "test" , {expiresIn : '1h'});
        res.status(200).json({result: newUser, token})
    }catch(error){
        res.status(500).json("Something went wrong...")//if any error occurs this message will be shown 
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json({message:"User don't exist."})
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({email: existinguser.email, id: existinguser._id}, "test" , {expiresIn : '1h'});
        res.status(200).json({result: existinguser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    } 
    
}