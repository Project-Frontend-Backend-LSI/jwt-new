const {mongoose,Schema} = require('mongoose');

// Define the MongoDB schema and model
const freelancerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [6, "Username should have at least 6 characters"],
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minlength: [12, "Email should have at least 12 characters"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password should have at least 6 characters"]
  },
  country: {
    type: String,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    minlength: [10, "Email should have at least 6 characters"]
  },
  description: {
    type: String,
    required: [true, "description is required"]
  },
  services:[{
    type: Schema.Types.ObjectId,
    ref: "Service"
  }]
});



const Freelancer = mongoose.model('Freelancer', freelancerSchema);
module.exports = Freelancer;
