import multer from "multer";
import SaveHelper from "./FileSaveHelper";
const saver = new SaveHelper();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
