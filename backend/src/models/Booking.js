const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    // referencia pro usuario que criou esse Booking
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  spot: {
    // referencia pro usuario que criou esse Booking
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
