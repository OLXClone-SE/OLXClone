Sprint 2 Accomplishments:

Frontend ::
-----------

Redux Setup
------------

Setup of redux using redux, redux-thunk and reduxjstoolkit is done on the frontend side.
This is done as part of the front end integration with backend.

Slices :: Created slices for LoginComponent, SignupComponent and one Dummy Component (For testing purpose).

Reducers :: Different reducers are creaeted to update the redux store when actions are fired.

Actions :: Both asynchronous and synchronous actions are created in order to deal with normal data flows and backend API calls.

Store :: Store setup is done and all the reducers are connected to the store.

Signup Component:
-----------
Signup Component is connected to backend and is making use of redux. Now a user can signup on the system to receive the OTP. After recieving the OTP the user will enter the OTP into the respective box and an api call will be made to verify the user OTP. Once the frontend receives the response from OTP verification api, then user will be registered based on the response. 

Login Component:
-----------
Login Component is integrated with backend and is making use of redux. Now a already registered user can logon to the system with his credentials. Once the user is logged in, they will be redireted to the home page. 

Home Page Component:
-----------
Home page component is developed, now the logged in user can see the home page as the landing page. There are options for viewing profile, logging out etc. Also they can see some dummey products on the home page, which will later be replace with api data from the backend. Home page also contains a search bar with search icon to search products. User also can view different categories of products, for now there is dummy data and will be replaced with categories data in next sem.   

Profile Page Component:
-----------
This component manages the user profile. User can navigate to this page from the home page. They can see and update all their details. They can also see the products that they are currently selling on the platform.

Backend ::
----------

CORS Support 
------------

CORS support is added to the backend so that api's can be connected from localhost of front end. Allowing localhost:3000 where the react code runs to connect and use the backend APIs.

Password Hashing:
------------

In order to improve the security, now we are hashing the password and storing it onto the data base instead of directly storing the password. Also the hash will be decryptyed and verfied when the verify password method is used by login api. 

Update User Details API:
---------------------

Method : POST  
URL : http://localhost:4000/updateUserDetails
Data contract :  

Request Body :  

{  
    &nbsp; "mailid" : string,  
    &nbsp; "fname" : string  
    &nbsp; "lname" : string,  
    &nbsp; "phone" : string
}  

Response Body :  

{  
    &nbsp; "updated" : boolean  
}  

Description ::  
This is endpoint is used by the profile page to update user personal details.

unit test cases
---------------

Unit test case are written in order to test the functionality of all the utility functions such as otp sender, mail sender, db connection, password hashers, json parsers etc. The overall acieved coverage is >82%.

We have used cypress for writing test cases on front end. They are as follows,
- categorySpace: Tests whether the category drop down in the home page of user has specified number of categories or not.
- dropDownEditProfile: Tests whether the user can reach the drop down on clicking profile after successful login
- editProfileNavigation: Tests whether the user is being directed to the Edit Profile section after clicking edit profile option.
- navigateSingup: Tests whether the user is able to navigate to sign up page after clicking for sign up on login page.
- login: Tests whether the user is able to navigate to login page on browsing application url.
- signupVerify: Tests whether user is redirected to verifying otp after completing successful registration.
