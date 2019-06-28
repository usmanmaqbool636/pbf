const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
    text: {
        type: String,
        required: true
    },
    subcategory: {
        type:[Schema.Types.ObjectId],
        ref: "Sub"
    }
});


const Category = mongoose.model("Category", categorySchema);
module.exports = Category;