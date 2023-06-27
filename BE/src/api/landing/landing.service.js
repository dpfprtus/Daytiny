const landingRepository = require("./landing.repository");

exports.checkPhoneDuplicate = async (phoneNumber) => {
  try {
    const count = await landingRepository.phoneDuplicateCheck(phoneNumber);
    return count > 0;
  } catch (err) {
    throw err;
  }
};

exports.createInfo = async (phoneNumber, surveyList) => {
  try {
    return await landingRepository.postInfo(phoneNumber, surveyList);
  } catch (err) {
    throw err;
  }
};
