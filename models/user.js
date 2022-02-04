const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      validate(val) {
        // "rochafi" -> NaN -> accept
        // "rochafi26" -> NaN -> accept

        // "1234567" --> 1234567 -> reject

        // Value yang masuk akan diubah menjadi number dengan parseInt
        // Jika hasilnya NaN, itu menandakan bahwa yang di input bukanlah sebuah angka
        // Sehingga kita akan terima.
        const parsedValue = parseInt(val);
        const isValuNaN = isNaN(parsedValue);
        if (!isValuNaN) throw new Error("Username can not be only numbers");
      },
    },
    name: {
      type: String,
      required: true,
      trim: true, // menghapus semua space di awal dan di akhir. 'Alvin Rochafi'
      validate(val) {
        const parsedValue = parseInt(val);
        const isValuNaN = isNaN(parsedValue);
        if (!isValuNaN) throw new Error("Username can not be only numbers");
      },
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(val) {
        if (!isEmail(val)) throw new Error("Email is invalid");
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 9,
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
