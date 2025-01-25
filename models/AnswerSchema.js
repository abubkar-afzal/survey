const mongoose = require("mongoose");
const { Schema } = mongoose;
//Schema of answer
const answerSchema = Schema({
  user_name: { type: String, index: true, required: true, default: "" },
  user_occoupation: { type: String, index: true, required: true, default: "" },
  question_id: { type: Number, index: true, required: true },
  question_label: { type: String, index: true, required: true, default: "" },
  question_title: { type: String, index: true, required: true, default: "" },
  question_answer: { type: String, index: true, required: true, default: "" },
  user_address: { type: String, index: true, required: true, default: "" },
  user_phone: { type: String, index: true, required: true, default: "" },
  user_email: { type: String, index: true, required: true, default: "" },
});

export default mongoose.models.answers ||
  mongoose.model("answers", answerSchema);
