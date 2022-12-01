import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

export default User;
