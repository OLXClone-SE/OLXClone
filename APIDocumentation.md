<h1>API DOCUMENTATION</h1>

<h3> Login API  </h3>
    <p><br>
        This endpoint is used to login into the user's account using their credentials.
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/login  

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com",
    "password" : "HelloWorld",
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
| password | The password of the user | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - Logged-in Successfully </h4>

> ```json
> {
>     "approved" : true
> }
> ```     
<h4> Case #2 - Logged-in failed </h4>

> ```json
> {
>     "approved" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| approved | indicates whether the user login is success or not | boolean 
<br/>
<br/>
<hr/>

<h3> Signup API  </h3>
    <p><br>
        This endpoint is used to signup to the application using maiild, password and other details of the user.
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/signup 

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com",
    "password" : "HelloWorld",
    "fname" : "sam",
    "lname" : "kommi",
    "phone" : "0000000000",
    "otp" : "-1"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
| password | The password of the user | string |
| fname | The first name of the user | string |
| lname | The last name of the user | string |
| phone | The mobile number of the user | string |
| otp | The otp field to store future otp's of the user | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - signed-up Successfully </h4>

> ```json
> {
>     "approved" : true
> }
> ```     
<h4> Case #2 - signed-up failed </h4>

> ```json
> {
>     "approved" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| approved | indicates whether the user signup is success or not | boolean 
<br/>
<br/>
<hr/>

<h3> Verifyuser API  </h3>
    <p><br>
        This API will be used at two different places as of now while signing up and while resetting the password. So the action attribute in the request body changes accordingly.  
        This API will verify whether the user mail id is present in the database or not and will send an email to the user's registered mail id.  
        "action" attribute will take any string among the following ["signup", "resetPassword"] 
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/verifyuser  

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com",
    "action" : "signup | resetPassword"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
| action | The action of the user, either signup or reset password | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - verified Successfully </h4>

> ```json
> {
>     "otpsent" : true
> }
> ```     
<h4> Case #2 - verification failed </h4>

> ```json
> {
>     "otpsent" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| otpsent | indicates whether the user verification is success or not and otp is sent to the mailid or not | boolean 
<br/>
<br/>
<hr/>

<h3> Reset Password API  </h3>
    <p><br>
        This API will verify the entered OTP is matching with the one sent to the user's email id and resets the password to the new password in the request body.
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/resetpassword  

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com",
    "password" : "HelloWorld",
    "otp" : "1234"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
| password | The password of the user | string |
| otp | The otp field that consists of otp sent to user mail id | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - Reset Successful </h4>

> ```json
> {
>     "approved" : true
> }
> ```     
<h4> Case #2 - Reset failed </h4>

> ```json
> {
>     "approved" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| approved | indicates whether the user password reset is success or not | boolean 
<br/>
<br/>
<hr/>

<h3> Update User Details API </h3>
    <p><br>
        This endpoint is used by the profile page to update user personal details.
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/updateUserDetails

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com",
    "fname" : "sam",
    "lname" : "kommi",
    "phone" : "0000000000"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
| fname | The first name of the user | string |
| lname | The last name of the user | string |
| phone | The mobile number of the user | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - updated Successfully </h4>

> ```json
> {
>     "updated" : true
> }
> ```     
<h4> Case #2 - update failed </h4>

> ```json
> {
>     "updated" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| updated | Indicates whether the user details are updated or not  | string |
<br/>
<br/>
<hr/>

<h3> User Details API </h3>
    <p><br>
        This endpoint user details api is used for fetching the current loggedin user's details. It will be used in sell product functionality as well as update user details functionality of the application.
    </p>
    
<h4>Target URL </h4>
   
     http://localhost:4000/getUserDetails

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "mailid" : "mail@gmail.com"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| mailid | The mail Id of the user  | string |
  
<h4> Response Examples </h4>
<h4> Case #1 - fetched Successfully </h4>

> ```json
> {
>    "mailid" : "mail@gmail.com",
>    "fname" : "sam",
>    "lname" : "kommi",
>    "phone" : "0000000000",
> }
> ```     
<h4> Case #2 - fetch failed </h4>

> ```json
> {
>    
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| mailid | The mail Id of the user  | string |
| fname | The first name of the user | string |
| lname | The last name of the user | string |
| phone | The mobile number of the user | string |
<br/>
<br/>
<hr/>