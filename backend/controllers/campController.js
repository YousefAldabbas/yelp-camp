const Camp = require("../models/campModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//@desc   Get all camps
//@route  GET /api/camps/
//@access Puplic
const getCamps = asyncHandler(async (req, res) => {
  const camps = await Camp.find().populate("comments");
  res.status(200).json(camps);
});

//@desc   Get camp by id
//@route  GET /api/camps/:id
//@access Puplic
const getCamp = asyncHandler(async (req, res) => {
  const camp = await Camp.findById(req.params.id)
    .populate({
      path: "comments",
      select: "comment user date -_id",
      populate: {
        path: "user",
        select: "username -_id",
      },
    })
    .populate({
      path: "writer",
      select: "username -_id",
    })
    .exec();
  res.status(200).json(camp);
});

//@desc   Create new camp
//@route  POST /api/camps/
//@access private
const createCamp = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const camp = await Camp.create({
    ...req.body,
    writer: userId,
  });
  res.status(201).json(camp);
});

//@desc   Update camp by id
//@route  PUT /api/camps/:id
//@access private
const updateCamp = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const camp = await Camp.findById(req.params.id);

  if (camp.user.toString() !== userId) {
    res.status(401).json({
      message: "You are not authorized to update this camp",
    });
  }
  const updatedCamp = await Camp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(camp);
});

//@desc   Delete camp by id
//@route  DELETE /api/camps/:id
//@access private
const deleteCamp = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const camp = await Camp.findById(req.params.id);
  if (camp.user.toString() !== userId) {
    res.status(401).json({
      message: "You are not authorized to delete this camp",
    });
  }
  await Camp.findByIdAndDelete(req.params.id);
  await Comment.deleteMany({ camp: req.params.id });

  res.status(200).json({
    message: "Camp deleted successfully",
  });
});

module.exports = {
  getCamps,
  getCamp,
  createCamp,
  updateCamp,
  deleteCamp,
};
