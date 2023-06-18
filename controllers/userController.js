const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');



// Home Page
exports.homePage = async (req, res, next) => {
  
    res.render('home');
}

