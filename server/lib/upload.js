const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: path.join('public', 'uploads', 'items'),
  filename: filename
});
const upload = multer({
  storage: storage
});

function filename(req, file, cb) {
  cb(null, Date.now() + '-' + file.originalname.split(' ').join(''));
}

module.exports = upload;
