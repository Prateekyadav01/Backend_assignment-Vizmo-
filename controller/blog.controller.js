import { BlogPost } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"


export const blogPost = async(req,res)=>{
    console.log(req.body);
    try {
        const{ title , content,image} = req.body;
        const user = req.user;
        console.log("New blog-------->",user);
        

        if([title,content,image].some(
            (field) => typeof field === 'string' && field.trim()===''
        )){
            throw new ApiError(400, "all fields are required");
        }
        const newPost = await BlogPost.create({
            title,
            content,
            author:user._id,
            image
        })
        // await newPost.save();
        console.log(newPost);

        return res.status(200).json(
            new ApiResponse(200, newPost,"New Blog is created successfully")
        )
    } catch (error) {
        console.log("error in creating blog post", error);

    }
}