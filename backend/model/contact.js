const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "NA",
  },
  designation: {
    type: String,
    default: "NA",
  },
  company: {
    type: String,
    default: "NA",
  },
  industry: {
    type: String,
    default: "NA",
  },
  email: {
    type: String,
    default: "NA",
  },
  phNo: {
    type: String,
    default: "NA",
  },
  country: {
    type: String,
    default: "NA",
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);

// -----------------------------------------------
// const Contact = mongoose.model("contact", contactSchema);

// const dummy = async () => {
//   for (let i = 0; i < 15; i++) {
//     const data = new Contact({
//       name: "n" + i,
//       designation: "d" + i,
//       company: "c" + i,
//       industry: "i" + i,
//       email: "e" + i,
//       phNo: "p" + i,
//       country: "ind" + i,
//       user: "6292393fdb09723b11bd404d",
//     });

//     await data.save();
//   }
// };

// dummy();
