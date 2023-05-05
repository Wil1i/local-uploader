const File = require("../models/File")

const post = async (req, res) => {
    const findTargetFile = await File.findByPk(req.query.id)
    if(!findTargetFile) return res.json({ok : false})

    await findTargetFile.update({displayName : req.query.name})
    return res.json({ok : true})
}

module.exports = {
    post
}