const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const Camp = require("../models/campModel");
//@desc   Get comments by id
//@route  GET /api/camps/comments/:id
//@access Puplic

const getCampComments = asyncHandler(async (req, res) => {
  const camp = req.params.id;
  const comments = await Comment.find({ campground: camp });
  if (!comments) {
    res.status(400);
    throw new Error("No comments found");
  }
  res.status(200).json(comments);
});

// const postComment = asyncHandler(async (req, res) => {
//   const { comment } = req.body;
//   const campId = req.params.id;
//   console.log(comment);
//   console.log(campId);
//   const newComment = await Comment.create({
//     comment,
//     user: req.user.id,
//     camp: campId, //check
//   });

//   res.status(201).json(newComment);
// });

const postComment = asyncHandler(async (req, res) => {
  const { comment } = req.body;
  const campId = req.params.id;
if(!comment || !campId){
  res.status(400)
  throw new Error("invalid data")
}

  const camp = await Camp.findById(campId)
    .populate({
      path: "comments",
    })
    .exec();
  const newComment = await Comment.create({
    comment,
    user: req.user.id,
    camp: campId, //check
  });
if(!camp){
  res.status(400)
  throw new Error("campground not found")
}
if(!newComment){
  res.status(400)
  throw new Error("comment not created")
}
  camp.comments.push(newComment);
  camp.save();
  res.status(201).json(camp);
});

const deleteComment = asyncHandler(async (req, res) => {
  const comment = req.params.commentId;
  const userId = req.user.id;
  const commentToDelete = await Comment.findById(comment);
  // console.log(
  //   `commentToDelete: ${commentToDelete} userId: ${userId} comment: ${comment}`
  // )
  commentToDelete
    ? console.log(commentToDelete.user.toString() === userId)
    : console.log("not exist");
  if (commentToDelete.user.toString() !== userId) {
    console.log("user id", userId);
    console.log("comment user id", commentToDelete.user);
    res.status(401).json({
      message: "You are not authorized to delete this comment",
    });
  }
  const deletedComment = await Comment.findByIdAndDelete(comment);
  res.status(200).json(deletedComment);
});

module.exports = {
  getCampComments,
  postComment,
  deleteComment,
};
