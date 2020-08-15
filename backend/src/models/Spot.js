const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      // referencia pro usuario que criou esse spot
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://169.254.211.58:3333/files/${this.thumbnail}`; // esse endereço muda de acordo com a rede que estou usando, antes era http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model("Spot", SpotSchema);
