const landingRepository = require("./landing.repository");

exports.createInfo = async (phonNumber, surveyList) => {
  try {
    const count = await landingRepository.phoneDuplicateCheck(phonNumber);
    if (count > 0) {
      throw new Error(409, "phonenumber duplicated");
    }
    return await landingRepository.postInfo(phonNumber, surveyList);
  } catch (err) {
    throw err;
  }
};
