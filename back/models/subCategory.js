const mongoose = require("mongoose");
const { Schema } = mongoose;
const Category = require('./category');
const subSchema = new Schema({
    text: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    key: String,
    value: String
});

subSchema.pre('save', function (next) {
    console.log(this)
    this.value = this._id;
    this.key = this._id
    Category.update(
        { _id: this.category },
        { "$push": { subcategory: this._id } },
        { new: true, upsert: true },
        (err, docs) => {
            console.log(docs);
            if (err) {
                return next(err);
            }
            next();
        }
    )
});
const sub = mongoose.model("Sub", subSchema);
module.exports = sub;