const landingService = require("./landing.service");

exports.createInfo = async (req, res) => {
  const { phoneNumber, surveyList } = req.body;


  if (typeof surveyList !== "string") {
    res.status(400).json({ error: "surveylist is not a string or missing" });
    return;
  }
  try {
    await landingService.createInfo(phoneNumber, surveyList);
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.code });
  }
};

exports.checkPhoneInfo = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const isDuplicate = await landingService.checkPhoneDuplicate(phoneNumber);
    if (isDuplicate) {
      res.status(409).json({ message: "Phone number is duplicated" });
    } else {
      res.status(200).json({ message: "Phone number is valid" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};