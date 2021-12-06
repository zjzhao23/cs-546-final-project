const express = require("express");
const router = express.Router();
const data = require("../data");
const reviewsData = data.reviews;
const commentsData = data.comments;
const helper = require("../data/helper");

router.get("/comment/:id", async (req, res) => {
    try {
        helper.checkAndGetID(req.params.id);
    } catch (e) {
        res.status(400).json({
            error: e
        });
        return;
    }
    if (!req.params.id) {
        res.status(400).json({
            error: "You must Supply a comment id to get comment data",
        });
        return;
    }
    try {
        const comment = await commentsData.get(req.params.id);
        res.json(comment);
    } catch (e) {
        res.status(404).json({
            error: e
        });
        return;
    }
});

router.get("/:id", async (req, res) => {
    try {
        helper.checkAndGetID(req.params.id);
    } catch (e) {
        res.status(400).json({
            error: e
        });
        return;
    }
    if (!req.params.id) {
        res.status(400).json({
            error: "You must Supply a review id to get comments of that review",
        });
        return;
    }
    try {
        const commentList = await commentsData.getAll(req.params.id);
        res.json(commentList);
        // res.status(200);
    } catch (e) {
        res.status(500).json({
            error: e
        });
        return;
        // res.status(500);
    }
});

router.post("/:id", async (req, res) => {
    try {
        helper.checkAndGetID(req.params.id);
    } catch (e) {
        res.status(400).json({
            error: e
        });
        return;
    }
    const commentBody = req.body;
    if (!commentBody) {
        res.status(400).json({
            error: "You must Supply data to post"
        });
        return;
        // res.status(400);
    }

    if (!req.params.id) {
        res.status(400).json({
            error: "You must provide review id"
        });
        // res.status(400);
        return;
    }
    if (!commentBody.comment) {
        res.status(400).json({
            error: "You must provide a comment"
        });
        // res.status(400);
        return;
    }
    // if (!commentBody.name) {
    //     res.status(400).json({
    //         error: "You must provide commenter name"
    //     });
    //     // res.status(400);
    //     return;
    // }

    try {
        const newComment = await commentsData.create(
            req.params.id,
            // add logged in user id
            req.params.id,
            commentBody.comment,
        );
        res.json(newComment);
        // res.status(200);
        return;
    } catch (e) {
        res.status(500).json({
            error: e
        });
        // res.status(500);
        return;
    }
});

router.delete("/:id", async (req, res) => {
    try {
        helper.checkAndGetID(req.params.id);
    } catch (e) {
        res.status(400).json({
            error: e
        });
        return;
    }
    // if (!req.params.id) {
    //   res.status(400).json({ error: "You must Supply and ID to delete" });
    //   // res.status(400);
    //   return;
    // }
    try {
        await commentsData.get(req.params.id);
    } catch (e) {
        res.status(404).json({
            error: e
        });
        // res.status(404);
        return;
    }
    try {
        let commentResp = await commentsData.remove(req.params.id);
        res.json(commentResp);
        // res.status(200);
        return;
    } catch (e) {
        res.status(500).json({
            error: e
        });
        return;
        // res.status(500);
        // recipes;
    }
});

module.exports = router;
