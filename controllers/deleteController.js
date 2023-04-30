const File = require("../models/File");
const fs = require("fs");

const get = async (req, res) => {
  const findFile = await File.findByPk(req.query.id);
  fs.unlinkSync(`./public/uploads/${findFile.name}`);
  if (findFile) await findFile.destroy();
  res.redirect("/");
};

module.exports = {
  get,
};
