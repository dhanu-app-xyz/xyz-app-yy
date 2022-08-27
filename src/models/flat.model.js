const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    taluka_marathi: {
      type: String,
      required: true,
    }, // owner /tenant
    district_marathi: {
      type: String,
      required: true,
    },
    taluka_english: {
      type: String,
      required: true,
    }, // owner /tenant
    district_english: {
      type: String,
      required: true,
    },
    grampanchayat_english: {
      type: String,
      required: true,
    },
    tehsil_english: {
      type: String,
      required: true,
    },
    name_marathi: {
      type: String,
      required: true,
    },
    name_english: {
      type: String,
      required: true,
    },
    sex_marathi: {
      type: String,
      required: true,
    },
    sex_english: {
      type: String,
      required: true,
    },
    village_marathi: {
      type: String,
      required: true,
    },
    village_english: {
      type: String,
      required: true,
    },
    aadhar_number_last_four: {
      type: Number,
      required: true,
    },
    dod_marathi: {
      type: String,
      required: true,
    },
    dod_english: {
      type: String,
      required: true,
    },
    age_of_nominee_number: {
      type: Number,
      required: true,
    },
    wife_or_husbund_name_marathi: {
      type: String,
      required: true,
    },
    wife_or_husbund_name_english: {
      type: String,
      required: true,
    },
    wife_or_husbund_aadhar_number: {
      type: String,
    },
    name_of_mother_marathi: {
      type: String,
      required: true,
    },
    name_of_mother_english: {
      type: String,
      required: true,
    },
    name_of_father_marathi: {
      type: String,
      required: true,
    },
    name_of_father_english: {
      type: String,
      required: true,
    },
    mother_aadhar_number: {
      type: Number,
    },
    father_aadhar_number: {
      type: Number,
    },
    pincode_six_digit: {
      type: Number,
      required: true,
    },
    registration_number: {
      type: String,
      required: true,
    },
    registration_Date: {
      type: String,
      required: true,
    },
    Date_of_issueing: {
      type: String,
      required: true,
    },
    updating_date_with_time: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);