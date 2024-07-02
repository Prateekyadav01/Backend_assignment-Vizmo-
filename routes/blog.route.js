import {Router} from 'express'
import { allPost, blogPost, deletePost, singlePost, updatePost } from '../controller/blog.controller.js';
import { accessTokenGet } from '../middleware/Token.middleware.js';




const router = Router();


router.route('/newBlog').post(accessTokenGet,blogPost);
router.route('/getALLBlog').get(accessTokenGet,allPost);
router.route('/singleBlog/:id').get(singlePost);
router.route('/deleteBlog/:id').delete(accessTokenGet,deletePost);
router.route('/updateBlog/:id').patch(accessTokenGet,updatePost);

export default router;
