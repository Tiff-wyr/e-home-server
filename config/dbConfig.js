/**
 * Created by Administrator on 2018/10/25 0025.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e-home',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!")
});
module.exports=db