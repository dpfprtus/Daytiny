const landingService = require("./landing.service");

exports.createInfo = async (req, res) => {
  const { phoneNumber, surveyList } = req.body;

  if (phoneNumber.length !== 11) {
    res.status(400).json({ error: "phonenumber is not suitable or missing" });
    return;
  }

  if (typeof surveyList !== "string") {
    res.status(400).json({ error: "surveylist is not a string or missing" });
    return;
  }
  try {
    await landingService.createInfo(phoneNumber, surveyList);
    res.status(200).json({ message: "success" });
  } catch (e) {
    const { statusCode, message } = JSON.parse(e.message);
    res.status(statusCode).json({ error: message });
  }
};