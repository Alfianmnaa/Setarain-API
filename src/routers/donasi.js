const express = require("express");
const router = express.Router();
const donasiController = require("../controllers/donasi");

router.post("/create", donasiController.buatDonasi);
router.get("/get/:id", donasiController.getOneDonasi);
router.get("/getall", donasiController.getAllDonasi);
router.put("/update/:id", donasiController.updateDonasi);
router.delete("/delete/:id", donasiController.hapusDonasi);

// handle save
router.post("/donasi/:id/simpan", donasiController.simpanDonasi);
router.post("/donasi/:id/unsave", donasiController.unsaveDonasi);
router.get("/donasi/saved", donasiController.getSavedDonasi);

module.exports = router;
