const express = require("express");
const router = express.Router();
const Gallery = require("../models/gallery.model");
const middleware = require("../middleware");
const multer = require("multer");


const storage =multer.diskStorage({
    destination:(req,file,cb) => { 
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,req.params.id + ".jpg")
    }
});

const upload = multer({
    storage:storage, 
    limits:{
        fileSize: 1024 * 1024 * 6, 
    }
});

router
  .route("/add/mainImg/:id")
  .patch(middleware.checkToken, upload.single("img"), (req, res) => {
    Gallery.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          mainImg: req.file.path,
        },
      },
      { new: true },
      (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      }
    );
  });

router.route("/Add").post(middleware.checkToken, (req, res) => {
    const gallery = Gallery({
      username: req.decoded.username,
      email: req.decoded.email, 
      caption: req.body.caption,
    });
    gallery
      .save()
      .then((result) => {
        res.json({ data: result["_id"] });
      })
      .catch((err) => {
        console.log(err), res.json({ err: err });
      });
  });

  router.route("/getOwnGallery").get(middleware.checkToken, (req, res) => {
    Gallery.find({ email: req.decoded.email }, (err, result) => {
      if (err) return res.json(err);
      return res.json({ data: result });
    });
  });

  router.route("/getOtherGallery").get(middleware.checkToken, (req, res) => {
    Gallery.find({ email: { $ne: req.decoded.email } }, (err, result) => {
      if (err) return res.json(err);
      return res.json({ data: result });
    });
  });


module.exports = router; 
