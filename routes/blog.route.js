import {Router} from 'express'
import { blogPost } from '../controller/blog.controller.js';
import { accessTokenGet } from '../middleware/Token.middleware.js';




const router = Router();


router.route('/newBlog').post(accessTokenGet,blogPost);

export default router;
