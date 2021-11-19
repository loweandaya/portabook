const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookie = require('cookie-parser');
const multer = require('multer');
const file = 'front';
app.use(express.static('front'));
app.use('/',require('./routes/static'));
// this routes are undone 
// app.use('/api', require('./routes/post'))
//app.use('/',require('./routes/register'))


app.use(express.json(), express.urlencoded({extended : false}))

const storage = multer.diskStorage({
  distination : './front/uploads/',
  filename: function(req,file,cb){
    cb(null,file.fieldname + '-' + Date.now() + path.exname(file.originalname))
  }
});

const upload = multer({
  storage: storage
}).single('profile')
console.log(multer);
app.listen('2000', () => {
  console.log('ok')
});
