
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of question
const newuserSchema = Schema ({
    user_name: {type : String, index : true, required : true, default : "" },
    user_bd: {type : String, index : true, required : true, default : ""},
    user_phone: {type : Number, index : true, required : true, default : ""},
    user_email: {type : String, index : true, required : true, default : ""},
    user_password: {type : String, index : true, required : true, default : ""},
    user_occoupation: {type : String, index : true, required : true, default : ""},
    user_address: {type : String, index : true, required : true, default : ""},
    user_photo: {type : Number, index : true, required : true, default : ""},

})


export default mongoose.models.users || mongoose.model("users",newuserSchema);