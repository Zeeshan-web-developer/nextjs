import mongoose from "mongoose"

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
})

export default mongoose.models.User || mongoose.model("User", UserSchema)
