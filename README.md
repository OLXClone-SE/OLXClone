<h3>Application Overview</h3>
<hr/>

OLX CLONE is the title of our application. 

<p align="justify">OLX is a web platform that brings buyers and sellers of various items and properties together. For example, if a person wants to sell their bicycle, they will post an advertisement on OLX. Interested users can buy the bike from them.</p> 

<p align="justify">This program has various advantages, including no limit on the number of individuals who can view the product. Because it's an online application, anyone with an internet connection can readily view the goods. Because of the increased reach, more merchants can sell the product to whoever offers them the best profit.</p>

<p>
Our application aims to replicate some of the features of the OLX CLONE application using a different tech stack. We are implementing features like 
</p>

<ul>
<li>Posting advertisement about a product.</li>
<br/>
<li>Viewing different kinds of products available on the platform to buy.</li>
<br/>
<li>Viewing own listed products which the logged-in user wants to sell on the website.</li>
<br/>
<li>Searching products on the website by search keyword, category, and other factors.</li>
<br/>
<li>Updating the user information such as name, phone number, address, and others.</li>
<br/>
<li>Viewing user profile information.</li>
<br/>
<li>Viewing categories list available on the portal.</li>
<br/>
<li>Selecting and viewing more details about a particular product.</li>
<br/>
<li>Securely Sign up and log on to the system.</li>
<br/>
<li>Getting OTPs for different flows like forgetting a password, signing up, etc.</li>
<br/>
</ul>

<h3>How to run the project :</h3>
<hr/>

1. Pre-requisites
    1. Yarn 
    2. PostgresSql database
    3. Go 
    4. create-react-app
    5. node
    6. Browser

2. Setting Up
    1. Clone the project from github repo
    2. run the command yarn (It will install all the dependencies)
    3. locate the sql script file and create the tables using the script file.
    4. create a .env file at server root and provide the following details:
        dbhost,
        dbport,
        dbuname,
        dbpass,
        dbname,
        frommail,
        mailpassword,
        mailid,
        smtpserver,
        smtpsocket.
    5. go to the workspaces > server > then run go command (It will install the backend go dependencies.)
    6. Now in order to run the application go to root folder of the project and run the command "yarn start", it will start both the server and the client.
    7. The client will be available on http://localhost:3000 and the server will be available on http://localhost:4000
    8. Several other customized commands are available to run individual modules in different modes, for those please refer to package.json > scripts.

3. In order to use the application a user must create an account using a mail id. 
    1. Signup using mail id and verify otp.
    2. Once the otp is verified user can logon to the system and can access all the functionalities available in the system.

<h3>Application Demo Video</h3>

https://user-images.githubusercontent.com/34389177/164353638-bc62c406-aec7-4438-bb5e-c4cca95a2073.mp4


<h3>Frontend cypress tests</h3>
<hr/>

In this sprint we have added cypress tests for new functionalities like uploading images, logout functionality and added some more utility functions for generating more mock data for validating the service APIs. We have added some tests for existing functionalities as well. In total we have written 15 test cases that covers end to end functionality for all the functions in out application. We have attached the test case results as well as the recording of cypress tests we wrote in our application.

<h4>Frontend Cypress test video</h4>

https://user-images.githubusercontent.com/34389177/164371155-9a16e661-1dc1-407c-8e54-39b8c29f5deb.mp4

<h4>Frontend unit tests image</h4>

![tc 1](https://user-images.githubusercontent.com/36855976/164371939-802a7cfa-424f-48c6-b130-a43c1e9eb51e.JPG)

![tc2](https://user-images.githubusercontent.com/36855976/164371951-da5d25cb-2919-49e3-8d66-f9ccca3cba01.JPG)

<br/>

<h3>Backend unit tests</h3>
<hr/>

In this sprint we have added unit tests for all the api handlers and other utility functions we used in our project. Unit tests were written considering every possible flow of the application and all the flows were covered through the unit tests. In total we have written 20 unit tests that checks all possible flows for all functions used in our application. The below attachments are the recording and snapshot of the unit tests we wrote in our application.

<h4>Backend unit test video</h4>

https://user-images.githubusercontent.com/34389177/164349891-e32797f6-6145-4d80-9944-90e955144b00.mp4

<h4>Backend unit tests image</h4>

<img width="419" alt="Screen Shot 2022-04-20 at 9 37 26 PM" src="https://user-images.githubusercontent.com/34389177/164354417-774c7666-d819-403d-a8c4-ee02cb26c159.png">

<h3>Link to API documentation:</h3>
<hr/>
https://github.com/OLXClone-SE/OLXClone/blob/main/APIDocumentation.md

<br/>

<h3>Link to Sprint/Project Board:</h3>
<hr/>
https://github.com/orgs/OLXClone-SE/projects/1

<br/>

<h3>Sprint 4 Deliverables</h3>
<hr/>

JWT Implementation
--------------------

<p>We implemented user authorization functionality using JSON Web Tokens. For this we had to resolve cors on both backend and front end so that we are allowed to send cokkies from the front end to the backend for verification. Also, it helped to set cookie on the front end which is being sent from the backend.</p>

<p>For now the cookie is set to be timed out after 30 mins and if the user wants to access any functionality of the application after 30 mins they have to login again.</p>

<p>For every request that requires authorization front end will send a token to the backend and the backend will verify the token with secret hash value. A lot of effort is put on this feature both from the backend as well front end.

<h3>Logout Functionality</h3>
<hr/>

<p>After clicking on the logout button user will be redirected to the login page and the token at the client side will be invalidated.</p>



<h3>Image uploading funcitonality</h3>
<hr/>
    <ul>
    <li>If the logged in user wants to sell a product he can use the sell option and fill out a form containing details of the product. This api will save the image of the product specified by the user. The id of the product is automatically gets generated by the database. THe below URL is hit with the image of the product the uesr wants to sell. We have set such that the user can only upload one image per product.
    </li>
    <li>At the Back end the server takes the uploaded image and stores in the defined directory. Then it stores the directory path in the Database which is a much more efficient way than storing all the images inside the database leading to insufficient memory issues. This is also comparitively better as we need not run a query against our database as database operations are often costly.
    </li>
    </ul>
    
<h4>Target URL </h4>
   
      http://localhost:4000/uploadImage

   
<h4>Request Method   </h4>
    
    Post
  

<h4> Request Body </h4>

```json
{
    "formData" : "formData"
}
```
<h4> Request Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | ------------- | 
| image | The image of the product  | jpg or png |
  
<h4> Response Examples </h4>
<h4> Case #1 - posted Successfully </h4>

> ```json
> {
>   "approved" : "Uploaded image successfully"
> }
> ```     
<h4> Case #2 - post failed </h4>

> ```json
> {
>    "approved" : "http error message stating the cause"
> }
> ``` 

<h4> Response Fields </h4>

| Field Name  | Description |  Datatype |
| ------------- | ------------- | -------------
| approved | This indicates whether the image is successfully uploaded or not  | string |
<br/>
<br/>

<h3> Test case for verfying logout action </h3>
<ul>
    <li>The test case is written as verifyLogoutService. </li>
    <li>In this test case the logout service is verified</li>
    <li> It is verified that the user after logging out is redirected to login page as moving backward to other pages is restricted </li>
    <li> The test case output result is as follows, </li>
</ul>

![tc1](https://user-images.githubusercontent.com/36855976/164376573-da4c0537-3848-4f81-8c8e-fa24e0cd9317.JPG)

<h3> Test case for navigating to sell products page</h3>
<ul>
    <li>The test case is written as sellProductNavigation.spec</li>
    <li>In this test case the it is verified that the user is able to navigate to the sell products page after logging in.</li>
    <li> It is verified that after successful login the user navigates to sell product page by clicking sell in the home page</li>
    <li> The test case output result is as follows, </li>
</ul>

![tc4](https://user-images.githubusercontent.com/36855976/164377251-c31c0ff6-eb7c-43f8-81be-f4659072720c.JPG)


<h3> Test case for enabling user to enter details and submitting product for sale </h3>
<ul>
    <li>The test case is written as sellProductNavigation.spec</li>
    <li>In this test case the sellProduct API is verified i.e. whether the user is able to enter the product that they are willing to sell.</li>
    <li> It is verified that the user after filling out the fields like Product name, price, details, product image and clicking sell product the selling item is added to the user profile</li>
    <li> The test case output result is as follows, </li>
</ul>

![tc2](https://user-images.githubusercontent.com/36855976/164376596-6128b07f-3cf2-4b24-b5ca-8ed92f679b30.JPG)

<h3>Test case for testing as successfull Image upload</h3>
<ul>
    <li>The test case is written verifyUploadImageService.spec</li>
    <li>In this test case the uploadImage API is verified i.e. whether the image given by the user is successfully uploaded or not.</li>
    <li> It is verified that the user after selecting choose file and selecting a image the image is received by server and a response that the image is successfully uploaded is given out</li>
    <li> The sample images is taken from the fixtures directory in the cypress folder.
    <li> The test case output result is as follows, </li>
</ul>

![tc3](https://user-images.githubusercontent.com/36855976/164376613-7f27a5d9-e065-44ee-8609-7f5dbd9cee15.JPG)

<h3> Team Members Details </h3>
<hr/>
<ul>
<li>Venkata Sai Samanth Kommi (BackEnd + FrontEnd)</li>
<li>Satya Naga Akhilesh Irrinki (FrontEnd) </li>
<li>JayaChandra Gunturu (FrontEnd) </li>
<li>Venkata Maneesh Reddy Konkala (BackEnd) </li>
</ul>

<br/>

<hr/>
