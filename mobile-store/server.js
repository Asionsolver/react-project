const jsonServer = require("json-server");
const multer = require("multer");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/images");
  },
  filename: function (req, file, cb) {
    let date = new Date();
    let imageFilename = date.getTime() + "-" + file.originalname;
    req.body.imageFilename = imageFilename;
    cb(null, imageFilename);
  },
});

const bodyParser = multer({ storage: storage }).any();

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(bodyParser);
server.post("/products", (req, res, next) => {
  let date = new Date();
  req.body.createdAt = date.toISOString();

  if (req.body.price) {
    req.body.price = Number(req.body.price);
  }

  let hasError = false;
  let error = {};

  if (req.body.name.length < 2) {
    hasError = true;
    error.name = "Name must be at least 2 characters";
  }

  if (req.body.brand.length < 2) {
    hasError = true;
    error.brand = "Brand must be at least 2 characters";
  }

  if (req.body.category.length < 2) {
    hasError = true;
    error.category = "Category must be at least 2 characters";
  }

  if (req.body.price < 0) {
    hasError = true;
    error.price = "Price must be positive";
  }

  if (req.body.description.length < 2) {
    hasError = true;
    error.description = "Description must be at least 2 characters";
  }

    if (hasError) {
        res.status(400).json(error);
        return;
    }

  // Continue to JSON S erver router
  next();
});

server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
