var mongoose = require('mongoose')
var db_url = 'mongodb+srv://root:root@cluster0.fkhclig.mongodb.net/onlineIDE?retryWrites=true&w=majority'

// var db_url = 'mongodb://wajid:codeeditor543@ds263436.mlab.com:63436/codeeditor'
mongoose.connect(db_url, { useNewUrlParser: true , useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });