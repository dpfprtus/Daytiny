import axios from "axios";
import axiosBaseURL from "../../axios.";

const url = 'http://127.0.0.1:5000/api/user/survey';

export const registUser = async (formData) => {
  const response = await axios.post(url, {
    phoneNumber: formData.phoneNumber,
    surveyList: JSON.stringify(formData.surveyList),
  });
  console.log(response);
  return response;
}