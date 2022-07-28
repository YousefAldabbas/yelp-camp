const express = require("express");
const router = express.Router();
const {
  getCampComments,
  postComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/:id").get(getCampComments).post(protect, postComment)
router.route("/:id/:commentId").delete(protect, deleteComment)
module.exports = router;
