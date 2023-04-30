const File = require("../models/File");

const get = async (req, res) => {
  const files = await File.findAll();
  res.render("index", { files });
};

const post = async (req, res) => {
  console.log(1);
  if (req.file && req.file.filename)
    await File.create({
      name: req.file.filename,
    });

  res.redirect("/");
};

module.exports = {
  get,
  post,
};
