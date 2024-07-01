import {Router} from 'express'
import { signup } from '../controller/auth.controller.js';



const router = Router();

router.route('/signup').post(signup);


export default router;
