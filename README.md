# define-statement-of-purpose-node-capstone

[![Build Status](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone.svg?branch=master)](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone)

Link to live application: https://webdev-toolkit.netlify.com/

# Goal & Use Case

This app should do three things, help one develop a Statement of Purpose, define personal values and beliefs and set goals that will help maintain my focus in daily life and relationships.

The Statement of Purpose is to help you focus on who you are as a person. It should be short, no longer than 3 or 4 sentences. This is not a statement to lay out a plan or set goals for business or even goals for personal growth. It is really just looking inside and discovering who you are at the core and who you want to be. Writing this statement is an assignment to create a verbal representation of “you” and who you hope to become. It is an idea to aspire to,  it is a direction to go. It is not concrete and unmoveable, it is fluid, it is malleable.  

Defining your values and beliefs will help you create this statement and then you may want to set goals that are in line with your statement. For example, you may say “I will be more aware of my families needs and encourage them often.” In your goals, you can outline what that might look like. 
 


# Screenshots
![image1](https://i.gyazo.com/d25de5a06546f4518a3ebfdd07314075.png)

![image2](https://i.gyazo.com/111d6234c74eb1fc1c13944427b07c17.png)

![image3](https://i.gyazo.com/9c2cb3ba45c7387a7cbfe5981f4c3235.png)

# User Stories & Initial UX

**Landing Page**
 * User is able to navigate through the application using the navigation bar.
 * The user is also exposed to the landing page information and can also view a footer which has several links in it that the user can click.
 
![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/landingpage.png)

**Login/Signup Page**
 * User enters valid information in all forms --> Successful login/signup and redirection back to previous page
 * User enters invalid information in some or all forms --> Unsuccessful login/signup, application checks which field(s) are incorrect and sends information to the user regarding this.

![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/loginsignuppage.png)

**Generation Page**
 * User enters information into form fields which specifies the settings for the output --> Output is shown to the user on submission.
 * User randomly generates something on the page using a button --> Output is shown to the user on submission.

![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/generationpage.png)

**Font Page**
 * User gets a list of sort options on the page that renders new fonts to the page.
 * User can click the font "cards" and be redirected to the selected font at google web fonts.

![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/fontspage.png)

**Cheat Sheet Page**
 * User selects a category from a list --> Gets redirected to the selected category.
 * User can select to view a link list or cheat sheets --> Gets redirected to the selected list/sheet.

![image1](https://raw.githubusercontent.com/tobnys/webdev-toolkit-final-capstone/master/github-images/cheatsheetquicklinkpage.png)

# API Documentation
### GET endpoint - ../api/functional/fonts/:sort
Retrieves fonts from the google web fonts API based on sort parameter.

### GET endpoint - ../api/functional/text
Generates and returns a text with a set amount of paragraphs based on a query option sent to the server. This endpoint uses the package called "loremIpsum" to generate the paragraphs.

### GET endpoint - ../api/functional/statistics
Retrieves statistics from a database which contains information about the application in general, for example, total amount of API calls. This is used in the application to show fun facts about the application.

# Technical stack

**Front-end**
 * HTML5
 * CSS3
 * JavaScript
 * jQuery 
 * Web Font Loader
 
**Back-end**
 * NodeJS
 * Mongoose / MongoDB
 * Heroku (hosting)
 * Axios

**Testing**
 * Mocha & Chai
 * TravisCI
 
**Responsiveness**
 * The site is fully responsive on most mobile & laptop devices.
 * Tested on Chrome, Firefox & Safari.
 
**Security**
 * Passport
 * Bcrypt

# Development Roadmap

### Version 1.1
 * Add "lorem pixel" as a feature.
 * "Lorem Pixel" is an existing idea which I would like to implement to this application, the feature allows a user to specify width, height and other properties in order to render a placeholder image for their website free of any copyright. 
 * Switch from 3rd party API usage to a custom created feature in regards to the lorem ipsum generation in order to make it more customizable.

### Version 1.2
 * Let users be able to register with an e-mail address in order to create a newsletter with fun facts and/or developer news.
 * Let users be able to change their password/email.