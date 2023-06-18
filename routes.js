const router = require("express").Router();
const { body } = require("express-validator");

const {
    homePage,
   
} = require("./controllers/userController");


router.get('/', homePage);


module.exports = router;