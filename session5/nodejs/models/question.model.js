const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    content: {type: String, required: true},
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0}

});
// mongoose.model("Question", QuestionSchema);

module.exports = mongoose.model("Question", QuestionSchema);