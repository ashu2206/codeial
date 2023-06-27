const express=require('express');
const router=express.Router();

const postController=require('../controller/post_controller');
console.log('post controller loaded')
router.get('/post',postController.post);



module.exports=router;