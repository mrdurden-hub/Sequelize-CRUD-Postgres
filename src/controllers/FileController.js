const Photo = require('../models/Foto');

class FileController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    const { user_id } = req.body;
    const foto = await Photo.create({ originalname, filename, user_id });
    return res.json(foto);
  }
}

module.exports = new FileController();
