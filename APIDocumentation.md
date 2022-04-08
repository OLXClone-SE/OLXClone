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
<h4> Case #2 - Booking Failed due to Invalid data in the request payload </h4>

> ```json
> {
>     "approved" : false
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| approved | indicates whether the user login is success or not | boolean 