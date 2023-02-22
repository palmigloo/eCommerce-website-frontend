
# Table of Contents 
[Project Description](#project-description)

[Overview](#overview)

- [Product Details](#product-details)

- [Ratings & Reviews](#ratings--reviews)

- [Questions & Answers](#questions--answers)

[Detailed View](#detailed-view)

- [Questions & Answers Module](#questions--answers-module)

[Installation](#installation)

[Technologies Used](#technologies-used)

[Team Members](#team-members)




# Project Description

The mission for this project is to create a modernized e-commerce platform that prioritizes user experience for a fashion appereal business. I teamed up with 2 other Software Developer designed and created 3 different modules shown belows: 
  1) Product details - Sai Vemireddy
  2) Ratings & Reviews - Kyle Martinelli
  3) Questions & Answers - Abigail LI

# Overview 

### Product Details
The Product Details module shows relevant information for a single product in the catalog. Its functionality can be divided into 3 sections:
 - Image Gallery
 - Product Information
 - Style Selector

<p align="center">
<img width="748" height="399"  src="https://user-images.githubusercontent.com/64453175/208263735-327471e5-98fd-46fc-9711-3e738d9ff39f.gif">
</p>


### Ratings & Reviews
The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into  pieces:
 - Write review
 - Reviews List
 - Sorting 

<p align="center">
<img width="747" height="532"  src="https://user-images.githubusercontent.com/114783607/208258468-18dc5738-62ee-47a1-81aa-615dc9c27c0a.gif">
</p>


### Questions & Answers 
The Questions & Answers module will allow viewing, asking and answering questions for the product selected. The functionality contained within this module can be divided into several pieces:
  - Display questions and answers
  - Search for questions based on keyword
  - Asking questions
  - Answering questions
  
<p align="center">
<img width="747" height="532"  src="https://user-images.githubusercontent.com/3084586/208255936-9d4b1bdc-bab0-4f93-98f1-25c165a89ce8.gif">
</p>


# Detailed View 

## Questions & Answers Module

### View questions/answers
 - Dynamically display questions/answers two at a time on clicking
 - Creation of photo gallery using Modal window to display photos in question/answer 
 <p align="center">
 <img width="650" alt="Screen Shot 2023-02-22 at 11 19 52 AM" src="https://user-images.githubusercontent.com/3084586/220744942-a2b1154c-8b43-43a3-897f-163cb71d5d97.png">
 </p>
 

### Search for a question/answer based on keyword
 - Dynamically return search result based on keyword entered( > 3 characters)
 - Created reuseable highlighter component to highlight the search term dynamically using Regular Expression 
 
<p align="center">
<img width="700" alt="Screen Shot 2023-02-22 at 11 19 52 AM" src="https://user-images.githubusercontent.com/3084586/220739094-832d723d-0009-41cb-8f89-ed7a93abc41a.png">
</p>

### Add a question/answer
 - Used form to capture all the question info with field validation for email format, name length, photo format, etc. 
 - Used to create modal window to create customized view 
 - Upload photo and preview using file, saved photo in server side with middleware Multer to persist photo and show in frontend 
<p align="center">
<img width="430" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/220739077-deb602e3-0d1a-4fd6-a4c5-c266cf1a10a2.png"> <img width="420" alt="Add an answer form" src="https://user-images.githubusercontent.com/3084586/220738996-e769fa90-1fd1-414f-b3d1-bc0b78d74b64.png"> 
</p>

### Vote or Report Question/Answer
 - Used localstorage to save the user's choice on vote/report 
 - Increment 


# Installation 
  To **build** and install all the dependencies
```
  npm install 
```

  To start **frontend** 
 ```
  npm run react-dev 
```
  To start **backend** 
 ```
  npm run server-dev 
```

  To **test** 
  ```
  npm run test 
```
  To check test **coverage**
  ```
  npm run test-coverage
  ```


# Technologies Used 
  - Frontend 
    - React 
    - Styled Component 
    - Webpack, Babel  

  - Backend
    - Express 
    - Node.js
    - Axios
    - Multer

  - Test 
    - Jest, React Testing Library
     
  - Deployment 
    - AWS

# Team Members 
<p align="center">
<a href="https://github.com/palmigloo"><kbd><img width="175" alt="Abigail" src="https://user-images.githubusercontent.com/3084586/208263347-363a0895-7ede-40f6-8f82-83434178ed66.png"></kbd></a>
<a href="https://github.com/svemi"><kbd><img width="175" alt="Sai" src="https://user-images.githubusercontent.com/3084586/208263354-569cfe2c-1ebc-4f14-ac58-68abbf701dc6.png"></kbd></a>
<a href="https://github.com/kylemartinelli"><kbd><img width="175" alt="Kyle" src="https://user-images.githubusercontent.com/3084586/208263384-b764f421-aee0-44a9-93a5-f1abe3910f24.png"></kbd></a>
</p>

