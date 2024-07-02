import { BlogPost } from "../models/blog.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";



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


export const allPost = async(req,res)=>{
    try {
        const posts = await BlogPost.find();
        return res.status(200).json(
            new ApiResponse(200, posts,"All Blogs are fetched successfully")
        )
    } catch (error) {
        console.log("error in fetching all blog posts", error);
    }
}

export const singlePost = async(req,res)=>{
    console.log(req.params.id);
    try {
        const post = await BlogPost.findOne({author:req.params.id});
        if(!post){
            throw new ApiError(404, "post not found");
        }
        return res.status(200).json(
            new ApiResponse(200, post,"Single Blog is fetched successfully")
        )
    } catch (error) {
        console.log("error in fetching single blog post", error);
    }
}

export const deletePost = async(req,res)=>{
    console.log(req.params.id);
    try {
        const post = await BlogPost.findByIdAndDelete(req.params.id);
        if(!post){
            throw new ApiError(404, "post not found");
        }
        return res.status(200).json(
            new ApiResponse(200, post,"Single Blog is deleted successfully")
        )
    } catch (error) {
        console.log("error in deleting single blog post", error);
    }
}


export const updatePost = async(req,res)=>{
    console.log(req.params.id);
    try {
        const post = await BlogPost.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!post){
            throw new ApiError(404, "post not found");
        }
        return res.status(200).json(
            new ApiResponse(200, post,"Single Blog is updated successfully")
        )
    } catch (error) {
        console.log("error in updating single blog post", error);
    }
}


export const filterPost = async(req,res)=>{
    console.log(req.query);
    try {
        const posts = await BlogPost.find({title:{$regex:req.query.title, $options:'i'}});
        return res.status(200).json(
            new ApiResponse(200, posts,"Filtered Blogs are fetched successfully")
        )
    } catch (error) {
        console.log("error in fetching filtered blog posts", error);
    }
}