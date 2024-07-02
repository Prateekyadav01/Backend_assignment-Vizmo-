    import { Timestamp } from 'mongodb';
    import mongoose from 'mongoose'

    const blogSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        image:{
            type: String,
            required: true
        }
    },{
        Timestamp:true
    })


    export const BlogPost = mongoose.model('BlogPost',blogSchema);