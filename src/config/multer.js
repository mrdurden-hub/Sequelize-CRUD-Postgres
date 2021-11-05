const multer = require('multer');
const { resolve, extname } = require('path');

const aleatorio = () => Math.floor(Math.random() * 1000 + 1000);
module.exports = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser jpg ou png'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
