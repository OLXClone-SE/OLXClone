Sprint 1 Accomplishments:

Backend ::
----------

Hot Reload:
-----------

Hot reload setup of the backend server is done using golang air package. Now the developers working on our repositories backend part can easily test their code without relaunching the server with new changes.

package used :: https://github.com/cosmtrek/air

OTP utility:
------------

Developed utility to send otp messages to the registered user's mail address uisng gomail package. This utility will be used to verify the user's mailid while registering and also 
during mailid verification while using forgot password functionality.

package used :: https://github.com/go-gomail/gomail

Database Connectivity:
---------------------

Connected the backend server to the postgres sql database. Also using middleware like goarm to seame=lessly execute database queries using golang syntax.

tools and packages :: gorm.io/gorm , pgAdmin4, postgresSql

API's Developed:
================

Login API :
----------

Method : POST  
URL : http://localhost:4000/login  
Data contract :  

Request Body :  

{  
    &nbsp; "mailid" : string,  
    &nbsp; "password" : string  
}  

Response Body :  

{  
    &nbsp; "approved" : boolean  
}  

Description ::  
This is endpoint is used to login into the user's account using their credentials.

Verifyuser API :
----------------

Method : POST  
URL : http://localhost:4000/verifyuser  
Data contract :  

Request Body :  

{  
    "mailid" : string,  
    "action" : string  
}  

Response Body :  

{  
    &nbsp; "otpsent" : boolean  
}  

Description ::  
This API will be used at two different places as of now, while signing up and while resetting password. So the action attribute in the request body changes accordingly.  
This api will verify the user mailid is present in the database or not and will send an email to the user's registered mail id.  
"action" attribte will take any string among the following ["signup", "resetPassword"]  

Reset Password API:
------------------

Method : POST  
URL : http://localhost:4000/resetpassword  
Data contract :  

Request Body :  

{  
    &nbsp; "mailid" : string,  
    &nbsp; "password" : string,  
    &nbsp; "otp" : int  
}  

Response Body :  

{  
    &nbsp; "approved" : boolean  
}  

Description ::  
This api will verify the entered otp is matching with the one sent to the user's mailid and resets the password to the new password in the request body.

SignUp API:
-----------

Method : POST  
URL : http://localhost:4000/resetpassword  
Data contract :  

Request Body :  

{  
    &nbsp; "mailid" : string,  
    &nbsp; "password" : string,  
    &nbsp; "fname" : string,  
    &nbsp; "lname" : string,  
    &nbsp; "phone" : string,  
    &nbsp; "otp" : int  
}  

Response Body :  

{  
    &nbsp; "approved" : boolean  
}  

Description ::  
This api will verify the entered otp is matching with the one sent to the user's mailid and creates a new record for the user with the details specified in the request body.
