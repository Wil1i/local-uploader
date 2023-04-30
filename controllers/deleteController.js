const File = require("../models/File");

const get = async (req, res) => {
  const findFile = await File.findByPk(req.query.id);
  if (findFile) await findFile.destroy();
  res.redirect("/");
};

module.exports = {
  get,
};
