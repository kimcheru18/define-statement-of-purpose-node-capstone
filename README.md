# define-statement-of-purpose-node-capstone

[![Build Status](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone.svg?branch=master)](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone)

Link to live application: https://define-statement-of-purpose.herokuapp.com/

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
Initial landing page is an explanation of what the app is for, user will swipe through information and instructions to get to the "Answer Questions" page

![image1]

**Answer Questions Page**
User will answer a question and swipe to the next question

![image1]

**Create "Statement of Purpose" Page**
User will create statement of purpose or will swipe to use template

![image1]

**Template Page**
User will have the option to use first template or swipe through several more and fill in the blanks to create their statement of purpose

![image1]

**Completed Statement of Purpose Page**
This page will have the users Statement of Purpose displayed, user can swipe to Values page from here

![image1]
**Values Page**
Displays users Values that they entered in the question section. User can swipe back to Statement of Purpose or swipe forward to Beliefs.

![image1]
**Beliefs Page**
Displays users Beliefs that they entered in the question section. User can swipe back to Values or swipe forward to Goals.

![image1]
**Goals Page**
This page is where users enter goals and steps to complete these goals. Once created, you will be able to swip to this page from Beliefs.

**Information Page**
This page will have more information about creating a Statement of Purpose.


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
