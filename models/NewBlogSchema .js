const mongoose = require("mongoose");
const { Schema } = mongoose;
//Schema of blog
const newblogSchema = Schema({
  blog_id: { type: Number, index: true, required: true },
  blog_title: { type: String, index: true, required: true, default: " " },
  blog_content: { type: String, index: true, required: true, default: " " },
  blog_image: { type: String, index: true, required: true, default: " " },
  blog_slug: { type: String, index: true, required: true, default: " " },

});

export default mongoose.models.blogs || mongoose.model("blogs", newblogSchema);
