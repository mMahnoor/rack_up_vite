const models = require("../../models");

exports.reviews = async({ projectId, userId, rating, reviewText }) => {
  
  const newReview = new models.Reviews({ projectId, userId, rating, reviewText });
  const savedReview = await newReview.save();

  const project = await models.Projects.findById(projectId).exec();
  if(!project) return project;
  if(!project.ratings){
      project.ratings=[];
  }
  if(!project.reviews) project.reviews=[];
  project.ratings.push(rating);
  project.reviews.push(reviewText);

  const rate_review = await project.save();

  return savedReview;
  
}