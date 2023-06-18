const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const app = express();
const fileUpload = require('express-fileupload');
// default options
app.use(fileUpload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((err, req, res, next) => {
   console.log(err);
   
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

