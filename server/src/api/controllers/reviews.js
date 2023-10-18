const models = require("../models");

exports.reviews = async(req, res) => {
    const { projectId, userId, rating, reviewText } = req.body;

  try {
    const newReview = new models.Reviews({ projectId, userId, rating, reviewText });
    const savedReview = await newReview.save();

    const project = await models.Projects.findById(req.body.projectId).exec();
    if(!project) return res.status(404).send("project not found");
    if(!project.ratings){
        project.ratings=[];
    }
    if(!project.reviews) project.reviews=[];
    project.ratings.push(req.body.rating);
    project.reviews.push(req.body.reviewText);

    const rate_review = await project.save();

    res.json(rate_review);
  } catch (error) {
    res.status(500).json({ error: 'Error creating review' });
  }
}