const mongoose = require("mongoose");

const permissionSchema = mongoose.Schema({
  formOn: {
    type: Boolean,
    default: false,
  },
});

permissionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
permissionSchema.set("toJSON", {
  virtuals: true,
});

exports.Permission = mongoose.model("Permission", permissionSchema);
