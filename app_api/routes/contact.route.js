const express = require("express");

const ctrl = require("../controllers/contact.ctrl");

const router = express.Router();


router.post("/contact", ctrl.createContact);

router.get("/contact", ctrl.findAllContacts);

router.get("/contact/:id", ctrl.findOneContact);

router.delete("/contact/:id", ctrl.deleteContact);

module.exports = router;