const express = require("express");
const view=require("../Helpers/Views")
const database = require("../Libs/RegistroDeUsuarios");

const router = express.Router();

router.get("/registro", function (req, res) {
  return view("Registro.html", res);
});
router.get("/InicioSesion", function (req, res) {
  return view("InicioSesion.html", res);
});

module.exports = router;
