import axios from 'axios';

const axiosBaseURL = axios.create({
  baseURL: process.env.HOST,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default axiosBaseURL;