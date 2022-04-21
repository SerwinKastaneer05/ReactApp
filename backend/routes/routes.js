const express = require("express")
const router = express.Router();

const createfile = require("../middleware/create");
const readfile = require("../middleware/read");
const readfileone = require("../middleware/readone");
const updatefile = require("../middleware/update");
const deletefile = require("../middleware/delete");


router.post('/students',createfile.createdata);
router.get('/students',readfile.readdata);
router.get('/students/:id',readfileone.readone);
router.put('/students/:id',updatefile.updatedata);
router.delete('/students/:id',deletefile.deletedata);


module.exports = router;