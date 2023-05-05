var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
var Schema = mongoose.Schema;

var Bank = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toObject: { getters: true, setters: true, virtuals: true },
    toJSON: { getters: true, setters: true, virtuals: true },
  }
);
Bank.index({ user_id: 1 });
Bank.plugin(mongoosePaginate);
Bank.plugin(aggregatePaginate);

module.exports = mongoose.model("sampletest", Bank);