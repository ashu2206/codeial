const express=require('express');

const router=express.Router();

const usersController=require('../controller/post_controller');


console.log('post router loaded')

router.get('/post',usersController.posts);



module.exports=router;