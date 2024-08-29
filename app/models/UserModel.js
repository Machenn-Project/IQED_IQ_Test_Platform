const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    School_Name: {
        type: String,
    },
    Grade: {
        type: String,
    },
    Mobile_Number: {
        type: String,
    },
});

// export User or Student schema
module.exports = Person = mongoose.model("User", UserSchema);