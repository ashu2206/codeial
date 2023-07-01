const express=require('express');

const router=express.Router();

const usersController=require('../controller/user_controller');


console.log('profile router loaded')

router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);



module.exports=router;