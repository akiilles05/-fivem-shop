const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Konfiguráld a Nodemailer-t az e-mail küldéshez
  const transporter = nodemailer.createTransport({
    host: "tesixtyone.tarhely.eu", // Helyettesítsd a saját levelezőszervered adataival
    port: 587,
    secure: false,
    auth: {
      user: "info@illesinnovate.hu", // Helyettesítsd a saját e-mail címeddel
      pass: "Galgoczi20", // Helyettesítsd a saját jelszavadat
    },
  });

  const mailOptions = {
    from: "your-email@your-domain.com", // Helyettesítsd a saját e-mail címeddel
    to: email, // Helyettesítsd a címzett e-mail címét (vagy használd a beérkezett űrlapad adatait)
    subject: "Új üzenet érkezett",
    text: `Név: ${name}\nE-mail: ${email}\nTelefonszám: ${phone}\nÜzenet: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Az e-mail sikeresen elküldve:", info);
    res.status(200).send("Az e-mail sikeresen elküldve");
  } catch (error) {
    console.error("Hiba az e-mail küldésekor:", error);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen`);
});
