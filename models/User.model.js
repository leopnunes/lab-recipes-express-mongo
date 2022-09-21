const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CAMPOS 
- name: String
- email: String
- favorites: [ObjectsId]
- dislikes: [ObjectsId]
*/

const clientSchema = new Schema({
  // TODO: write the schema
});

const ClientModel = mongoose.model("Client", clientSchema);

module.exports = ClientModel;
