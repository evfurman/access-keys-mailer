**The following steps are automated as part of a Gitlab-CI pipeline, but you can also run them manually.**  
  
This was written to poll Active Directory for new users, create IAM users with access keys to generate RDS Access Credentials, and email them to the email address in the user's Active Directory profile.

## Update Template
  
`aws ses update-template --cli-input-json file:///usr/local/createsestemplate.json`  
  
[https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-creating-template.html#ses-examples-update-template](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-creating-template.html#ses-examples-update-template)  
  
To Do: Write SAM Template to deploy access_keys_mailer.js
