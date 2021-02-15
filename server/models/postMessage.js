import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  selectedFile: String,
});

export default mongoose.model('PostMessage', postSchema);
