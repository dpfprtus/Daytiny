import axiosBaseURL from '../../axios';

export const registUser = async (formData) => {
  const response = await axiosBaseURL.post('/api/user/survey', {
    phoneNumber: formData.phoneNumber,
    surveyList: JSON.stringify(formData.surveyList),
  });
  return response;
};

export const registPhone = async (formData) => {
  const response = await axiosBaseURL.post('/api/user/phone', {
    phoneNumber: formData.phoneNumber,
  });
  return response;
};
