const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
 

console.log('router loaded')

router.get('/',homeController.home);// route home page 
router.use('/users',require('./users'))

// for any further routes , access form here
// router.use('./routesName',require('./routerfile))

// router.use('/post',require('./post'));

module.exports=router;