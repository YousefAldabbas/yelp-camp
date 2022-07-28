const express = require("express");
const router = express.Router();
const {
  getCamps,
  getCamp,
  createCamp,
  updateCamp,
  deleteCamp,
} = require("../controllers/campController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getCamps).post(protect, createCamp);
router
  .route("/:id")
  .get(getCamp)
  .put(protect, updateCamp)
  .delete(protect, deleteCamp);

module.exports = router;
