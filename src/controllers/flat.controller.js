const express = require("express");
// router
const router = express.Router();
// importing model 
const Product = require("../models/flat.model");
//CRUD operations 
const { upload } = require("../Middleware/fileUpload");
// post // store single Product at a time
router.post("/new",upload, async (req, res) => {
    let data = {
      taluka_marathi: req.body.taluka_marathi,
      district_marathi: req.body.district_marathi,
      taluka_english: req.body.taluka_english,
      district_english: req.body.district_english,
      grampanchayat_english: req.body.grampanchayat_english,
      tehsil_english: req.body.tehsil_english,
      name_marathi: req.body.name_marathi,
      name_english: req.body.name_english,
      sex_marathi: req.body.sex_marathi,
      sex_english: req.body.sex_english,
      village_marathi: req.body.village_marathi,
      village_english: req.body.village_english,
      aadhar_number_last_four: req.body.aadhar_number_last_four,
      dod_marathi: req.body.dod_marathi,
      dod_english: req.body.dod_english,
      age_of_nominee_number: req.body.age_of_nominee_number,
      wife_or_husbund_name_marathi: req.body.wife_or_husbund_name_marathi,
      wife_or_husbund_name_english: req.body.wife_or_husbund_name_english,
      name_of_mother_marathi: req.body.name_of_mother_marathi,
      name_of_mother_english: req.body.name_of_mother_english,
      name_of_father_marathi: req.body.name_of_father_marathi,
      name_of_father_english: req.body.name_of_father_english,
      mother_aadhar_number: req.body.mother_aadhar_number,
      father_aadhar_number: req.body.father_aadhar_number,
      pincode_six_digit: req.body.pincode_six_digit,
      registration_number: req.body.registration_number,
      registration_Date: req.body.registration_Date,
      Date_of_issueing: req.body.Date_of_issueing,
      updating_date_with_time: req.body.updating_date_with_time,
      image: req.file.path,
    };
    try{
        let product = await Product.create(data);
        res.status(200).send(product);
    }catch(error){
        console.log(error);
    }
});

// patch // updating Product // by :id
router.put("/update/:id",upload, async (req, res) => {
  let data = {
    taluka_marathi: req.body.taluka_marathi,
    district_marathi: req.body.district_marathi,
    taluka_english: req.body.taluka_english,
    district_english: req.body.district_english,
    grampanchayat_english: req.body.grampanchayat_english,
    tehsil_english: req.body.tehsil_english,
    name_marathi: req.body.name_marathi,
    name_english: req.body.name_english,
    sex_marathi: req.body.sex_marathi,
    sex_english: req.body.sex_english,
    village_marathi: req.body.village_marathi,
    village_english: req.body.village_english,
    aadhar_number_last_four: req.body.aadhar_number_last_four,
    dod_marathi: req.body.dod_marathi,
    dod_english: req.body.dod_english,
    age_of_nominee_number: req.body.age_of_nominee_number,
    wife_or_husbund_name_marathi: req.body.wife_or_husbund_name_marathi,
    wife_or_husbund_name_english: req.body.wife_or_husbund_name_english,
    name_of_mother_marathi: req.body.name_of_mother_marathi,
    name_of_mother_english: req.body.name_of_mother_english,
    name_of_father_marathi: req.body.name_of_father_marathi,
    name_of_father_english: req.body.name_of_father_english,
    mother_aadhar_number: req.body.mother_aadhar_number,
    father_aadhar_number: req.body.father_aadhar_number,
    pincode_six_digit: req.body.pincode_six_digit,
    registration_number: req.body.registration_number,
    registration_Date: req.body.registration_Date,
    Date_of_issueing: req.body.Date_of_issueing,
    updating_date_with_time: req.body.updating_date_with_time,
    image: req.file.path,
  };
  try {
    const product = await Product.updateOne(data);
    if (!req.params.id) {
      res.send("product not found");
    }
    res.send(product);
  } catch (err) {
    console.log(err.message);
  }
});

// get all the Products details
router.get("/all", async (req, res) => {
    try{
        let product = await Product.find().lean().exec();
        res.status(200).send(product);
    }catch(error){
        console.log(error);
    }
});


// get product by id 
router.get("/single/:id", async (req, res) => {
    let id = req.params.id;
  try {
  const product =  await Product.findById(id).lean().exec();
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

// get // 10 Products per page // page as param
router.get("/:page_count", async (req, res) => {
    try{
        let skip_count = +(req.params.page_count);
        skip_count = (skip_count - 1) * 10; 
        let products = await Product.find().skip(skip_count).limit(10).lean().exec();
        return res.status(200).send(products);
    }catch(error){
        console.log(error);
    }
});

// delete by id 

router.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(id);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;