const ApiResponse = require("../services/response_helper");

const postModel = require("./../models/post-model");

module.exports = {
  async createPost(req, res) {
    let post = await postModel.create(req.body);

    return res.status(201).send(ApiResponse.getSuccess(post));
  },

  async getAllPost(req, res) {
    let posts = await postModel.find();

    return res.status(200).send(ApiResponse.getSuccess(posts));
  },

  async updatePost(req, res) {
    let post = await postModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    if (post == null) {
      return res.status(400).send(ApiResponse.getError("post Not exist."));
    }

    return res.status(200).send(ApiResponse.getSuccess(post));
  },

  async deletePost(req, res) {
    let post = await postModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (post == null) {
      return res.status(400).send(ApiResponse.getError("post Not exist."));
    }

    return res.status(200).send(ApiResponse.getSuccess(post));
  },
};
