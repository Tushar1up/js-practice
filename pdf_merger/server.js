// filepath: /d:/JS practice/pdf_merger/server.js
const express = require('express');
const Path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { mergepdfs } = require('./merge');
const path = require('path');
app.use("/static", express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, "template/index.html"));
});

app.post('/merge', upload.array("pdfs", 2), async (req, res, next) => {
  console.log(req.files);
  await mergepdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  res.redirect("http://localhost:3000/static/merged.pdf");
  // res.send({data:req.files})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});