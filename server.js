const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

app.post("/api/send-code", async (req, res) => {
  try {
    const { phone } = req.body;

    await client.verify.v2.services(serviceSid).verifications.create({
      to: phone,
      channel: "sms",
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/verify-code", async (req, res) => {
  try {
    const { phone, code } = req.body;

    const result = await client.verify.v2
      .services(serviceSid)
      .verificationChecks.create({
        to: phone,
        code,
      });

    if (result.status === "approved") {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(5000, () => {
  console.log("✅ SMS server running on http://localhost:5000");
});