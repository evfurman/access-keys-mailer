const AWS = require('aws-sdk');
const response = require('cfn-response');

let email_from = 'admin@evfurman.com';
let email_to = process.env.EmailTo;
let user_name = process.env.User;
let access_key = process.env.AccessKey;
let secret_key = process.env.SecretKey;
let template_data = `{ 
\"user_name\":\"${user_name}\",
\"access_key\":\"${access_key}\",
\"secret_key\":\"${secret_key}\"
}`

let params = {
  Source: email_from,
  Destination: {
    ToAddresses: [
      email_to,
    ]
  },
  Template: 'iam-access-mailer',
  TemplateData: template_data
};

let sendEmail = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();

let handler = (event, context, callback) => {
  sendEmail
    .then(
        (data) => {
            response.send(event, context, response.SUCCESS, {});
            callback(null, data);
            console.log("sendMail success", data);
        }
    )
    .catch(
        (error) => {
            callback(new Error(error));
            console.log("sendMail failure", error); 
        }
    ); 
}

exports.handler = handler;
