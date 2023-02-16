
# Table of Contents 
[Product Description](#product-description)

[Overview](#overview)

- [Product Details](#product-details)

- [Ratings & Reviews](#ratings--reviews)

- [Questions & Answers](#questions--answers)

[Detailed Overview](#detailed-overview)

- [Questions & Answers](#questions--answers)

[Installation](#installation)

[Technologies Used](#technologies-used)

[Team Members](#team-members)




# Product Description

FILLER Co. is proud to present our latest project, a modernized e-commerce interface developed for a fashion and design business. FILLER was tasked with adapting and modernizing our clients outdated retail portal into a sleek and updated site that prioritizes user experience. Sections such as product details, ratings & reviews, and questions & answers have undergone a complete redesign.

<p align="center">
<img width="70" alt="Screen Shot 2022-12-09 at 10 42 14 PM" src="https://user-images.githubusercontent.com/64453175/208267640-b1871f6a-e24f-4240-9e11-3e5db89002ce.png">
</p>



# Overview 
A brief description outlining what the project


### Product Details
The Product Details module shows relevant information for a single product in the catalog. Its functionality can be divided into several pieces:
 - Image Gallery
 - Product Information
 - Style Selector
 - Add to Cart

<p align="center">
<img width="748" height="399"  src="https://user-images.githubusercontent.com/64453175/208263735-327471e5-98fd-46fc-9711-3e738d9ff39f.gif">
</p>



### Ratings & Reviews
The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:
 - Write new review
 - Reviews List
 - Sorting 
 - Rating Breakdown
 - Product Breakdown

<p align="center">
<img width="747" height="532"  src="https://user-images.githubusercontent.com/114783607/208258468-18dc5738-62ee-47a1-81aa-615dc9c27c0a.gif">
</p>


### Questions & Answers 
The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:
  - View questions
  - Search for a question
  - Asking a question
  - Answering a question
  
<p align="center">
<img width="747" height="532"  src="https://user-images.githubusercontent.com/3084586/208255936-9d4b1bdc-bab0-4f93-98f1-25c165a89ce8.gif">
</p>


# Detailed Overview 

## Questions & Answers detailed view

### View questions
 - Used ThemeProvider wrapper component from React's Styled-Components library to automatically provide a globalTheme prop to all nested React components.
 - Leveraged global prop with Ternary and Logical && operators to dynamically style specific features.

![FILLER_theme](https://user-images.githubusercontent.com/64453175/208257058-7636af62-264a-48e5-a965-8eaf58f8d56e.gif)

### Search for a question
 - Used React states to track displayed image, image gallery positions, and selected style.

![FILLER_StylesGallery](https://user-images.githubusercontent.com/64453175/208256043-d043ba4c-bcb0-48e7-aa50-b05251547cfd.gif)

### Asking a question
 - Used React's onMouseMove mouse event to track cursor. Cursor coordinates were obtained via mouse event's pageX and pageY properties.
 - Used cursor coordinates in conjunction with the window's innerHeight and innerWidth properties to create dynamic coordinates that were passed into the Translate CSS function of the Transform CSS property

![FILLER_zoomMode](https://user-images.githubusercontent.com/64453175/208256560-915badca-bd1a-4404-9500-ac536f11b240.gif)

### Answering a question
 - Used React states to track dropdown values.
 - Used localStorage to persist favorites-list through multiple sessions.


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


https://github.com/matiassingers/awesome-readme.
