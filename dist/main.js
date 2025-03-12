import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
const adress = '127.0.0.2';
console.log("import", import.meta.url);
const _filename = fileURLToPath(import.meta.url);
console.log("filename", _filename);
const _dirname = path.dirname(_filename);
console.log("dirname", _dirname);
app.use('/', express.static('dist'));
app.listen(port, adress, () => console.log(`listening at http://${adress}:${port}`));
//# sourceMappingURL=main.js.map