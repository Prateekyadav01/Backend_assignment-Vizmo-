
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/apiError.js";



export const signup = async(req,res)=>{
    console.log(req.body);
    try {
        const{userName , email ,password} = req.body;
        if([userName,email,password].some(
            (field) => typeof field === 'string' && field.trim()===''
        )){
            throw new ApiError(400, "all fields are required");
        }

        const existingUser = await User.find({email})
        if(existingUser){
            throw new ApiError(400, "email already exists");
        }

        const user = await User.create({
            userName,
            email,
            password,
        })

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
          );
      
          if (!createdUser) {
            throw new ApiError(
              500,
              "User not created something went wrong while creating"
            );
          }

          return res
          .status(200)
          .json(new ApiResponse(200, createdUser, "user registered successfully"));


    } catch (error) {
        console.log(error);
        throw new ApiError(400, error.message);
    }
}