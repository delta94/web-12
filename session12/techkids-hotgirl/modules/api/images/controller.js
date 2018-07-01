const ImageModel = require("./model");

//Create new image
const createImage = ( { imageUrl, title, description, createdBy }) => new Promise((resolve, reject) => {
     ImageModel
        .create({ imageUrl, title, description, createdBy })
        .then(imageCreated => resolve(imageCreated._id))
        .catch(err => reject(err));
 });

 // Create comment

 const createComment = (imageId, { content, createdBy }) => new Promise((resolve, reject) => {
     ImageModel.comments
        .create({ content, createdBy })
        .then(commentCreated => resolve(commentCreated._id))
        .catch(err => reject(err));
 })

 //Update image
const updateImage = (imageId, { imageUrl, title, description }) => new Promise((resolve, reject) => {
     ImageModel.findByIdAndUpdate(
            imageId,
            { imageUrl, title, description }
        )
        .then(updatedImage => resolve(updatedImage._id))
        .catch()
 })

 // Read all images
const listAllImage = () => new Promise((resolve, reject) => {
     ImageModel
        .find({ active: true })
        .then(images => resolve(images))
        .catch(err => reject(err))
 })



// Read images by pages
const listImagesByPage = (pageNumber) => new Promise((resolve, reject) => {
    ImageModel
       .find({ active: true })
       .sort({ createdBy: -1 })
       .skip((pageNumber - 1) * 25)
       .limit(25)
       .exec() //Chỗ để thực hiện callback //Báo sẽ thực hiện những queries ở trên
       .then(images => resolve(images))
       .catch(err => reject(err))
})

// Delete image
const deleteImage = (imageId) => new Promise((resolve, reject) => {
    ImageModel
       .findByIdAndUpdate(
            imageId,
            { active: false})
       .then(imageDeleted => resolve(images))
       .catch(err => reject(err))
})

//TODO: 
    // Comment 
    // View 
    // Like


    module.exports = {
        createImage,
        updateImage,
        deleteImage,
        listImagesByPage,
        createComment
    }