// const mysqlConnection = require("../../../config/config");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: "3306",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

exports.postInfo = (phoneNumber, surveyList) => {
  return new Promise((resolve, reject) => {
    const surveyListString = JSON.stringify(surveyList);
    console.log(surveyListString);
    connection.query(
      `INSERT INTO users (phone_number,survey_list,created_at) VALUES (${phoneNumber},${surveyListString},NOW())`,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      }
    );
  });
};

exports.phoneDuplicateCheck = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT COUNT(*) AS count FROM users WHERE phone_number =${phoneNumber}`,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows[0].count);
      }
    );
  });
};
