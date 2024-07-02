import {Router} from 'express'
import { allPost, blogPost, singlePost } from '../controller/blog.controller.js';
import { accessTokenGet } from '../middleware/Token.middleware.js';




const router = Router();


router.route('/newBlog').post(accessTokenGet,blogPost);
router.route('/getALLBlog').get(accessTokenGet,allPost);
router.route('/singleBlog/:id').get(singlePost);

export default router;
