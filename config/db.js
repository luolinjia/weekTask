/**
 * Created by luolinjia on 2018/1/17.
 */
const mongoose = require('mongoose');
const db = 'mongodb://localhost/weektask';
mongoose.connect(db);

let db = mongoose.connection;

db.on('error', function () {
	console.log('error');
});

db.once('open', function () {
	console.log('Mongo working...');
});

//声明schema
const userSchema = mongoose.Schema({
	username: String,
	password: String,
	create_time: Date,
	parent_id: Int8Array
});
//根据schema生成model
const model = {
	User: mongoose.model('User', userSchema)
};

module.exports = model;