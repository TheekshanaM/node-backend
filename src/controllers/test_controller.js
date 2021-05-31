const ApiResponse = require("../services/response_helper");

const TestModel = require("./../models/test-model");

module.exports = {
  async get(req, res) {
    try {
      return res.status(200).send(ApiResponse.getSuccess("Test result"));
    } catch (error) {
      return res.status(500).send(ApiResponse.getError(error.message));
    }
  },
};
