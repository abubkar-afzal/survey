
const mongoose = require('mongoose');
const {Schema} = mongoose;
//Schema of question
const questionSchema = Schema ({
    question_id: {type : Number, index : true, required : true },
    question_title: {type : String, index : true, required : true, default : ""},
    question_label: {type : String, index : true, required : true, default : ""},
})


export default mongoose.models.questions || mongoose.model("questions",questionSchema);