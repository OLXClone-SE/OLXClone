<h1>Sprint Board</h1>

<h3>Application Overview</h3>
<br/>
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

<br/>

<b>Link to API documentation:</b>
https://github.com/OLXClone-SE/OLXClone/blob/main/APIDocumentation.md

<br/>

Link to Sprint Board: 
https://github.com/orgs/OLXClone-SE/projects/1

<br/>

<h3> Team Members Details </h3>
<br/>
<ul>
<li>Venkata Sai Samanth Kommi (BackEnd + FrontEnd)</li>
<li>Satya Naga Akhilesh Irrinki (FrontEnd) </li>
<li>JayaChandra Gunturu (FrontEnd) </li>
<li>Venkata Maneesh Reddy Konkala (BackEnd) </li>
</ul>

<br/>

How to run the project :
------------------------

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
    4. create a .env file at server root and provide the following details.
        dbhost
        dbport
        dbuname
        dbpass
        dbname
        frommail
        mailpassword
        mailid
        smtpserver
        smtpsocket
    5. go to the workspaces > server > then run go command (It will install the backend go dependencies.)
    6. Now in order to run the application go to root folder of the project and run the command "yarn start", it will start both the server and the client.
    7. The client will be available on http://localhost:3000 and the server will be available on http://localhost:4000
    8. Several other customized commands are available to run individual modules in different modes, for those please refer to package.json > scripts.

3. In order to use the application a user must create an account using a mail id. 
    1. Signup using mail id and verify otp.
    2. Once the otp is verified user can logon to the system and can access all the functionalities available in the system.

<br/>

<h3>Sprint 4 Deliverables</h3>

JWT Implementation
--------------------

<p>We implemented user authorization functionality using JSON Web Tokens. For this we had to resolve cors on both backend and front end so that we are allowed to send cokkies from the front end to the backend for verification. Also, it helped to set cookie on the front end which is being sent from the backend.</p>

<p>For now the cookie is set to be timed out after 30 mins and if the user wants to access any functionality of the application after 30 mins they have to login again.</p>

<p>For every request that requires authorization front end will send a token to the backend and the backend will verify the token with secret hash value. A lot of effort is put on this feature both from the backend as well front end.

Logout Functionality
--------------------

<p>After clicking on the logout button user will be redirected to the login page and the token at the client side will be invalidated.</p>

Test Cases ::

--------------

!!!!!!!!!!!!!!!! Fill for both backend and front end !!!!!!!!!!!!!!!!

API
---
!!!!!!!!!!!!!!!! Jayachandra !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
For format refer to api documentation.md

Image Upload Front end 
----------------------

!!!!!!!!!!!!!!!! Jayachandra !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
