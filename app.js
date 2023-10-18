const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // para parsear el cuerpo de las solicitudes en formato JSON
app.use(cors());
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "bolialcuadrado@hotmail.com",
    pass: "BoliBoliBoli",
  },
});

app.post("/api/send-email", (req, res) => {
  const { to, message } = req.body;

  const mailOptions = {
    from: "bolialcuadrado@hotmail.com",
    to: "gianluccacipriani@gmail.com",
    subject: "Recordatorio programado",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al enviar el correo.");
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).send("Correo enviado exitosamente.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
