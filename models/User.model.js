const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CAMPOS 
- name: String
- email: String
- favorites: [ObjectsId]
- dislikes: [ObjectsId]
*/

const UserSchema = new Schema(
{
  name: { type: String },
  email: { type: String },
  favorites: { type: Array },
  dislikes: { type: Array }
}
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
