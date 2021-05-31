let express = require("express");
let router = express.Router();
let auth = require("./../services/auth_service");
let asyncMiddleware = require("./../services/async_middleware");

let postController = require("./../controllers/post_controller");

router.post("/create_post", auth, asyncMiddleware(postController.createPost));
router.get("/get_all_post", auth, asyncMiddleware(postController.getAllPost));
router.put(
  "/update_post/:id",
  auth,
  asyncMiddleware(postController.updatePost)
);
router.delete(
  "/delete_post/:id",
  auth,
  asyncMiddleware(postController.deletePost)
);

module.exports = router;
