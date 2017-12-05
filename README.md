# define-statement-of-purpose-node-capstone

[![Build Status](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone.svg?branch=master)](https://travis-ci.org/tobnys/webdev-toolkit-final-capstone)

Link to live application: https://define-statement-of-purpose.herokuapp.com/

# Goal & Use Case

This app should do three things, help one develop a Statement of Purpose, define personal values and beliefs and set goals that will help maintain focus in daily life and relationships.

The Statement of Purpose is to help you focus on who you are as a person. It should preferably be brief, something you would want to review on a regular basis. This is not a statement to lay out a plan or set goals for business or even goals for personal growth. It is really just looking inside and discovering who you are at the core and who you want to be. Writing this statement is an assignment to create a verbal representation of “you” and who you hope to become. It is an idea to aspire to,  it is a direction to go. It is not concrete and unmoveable, it is fluid, it is malleable.

Defining your values and beliefs will help you create this statement and then you may want to set goals that are in line with your statement. For example, you may say “I will be more aware of my families needs and encourage them often.” In your goals, you can outline what that might look like.



# Screenshots
![image1](https://i.gyazo.com/d25de5a06546f4518a3ebfdd07314075.png)

![image2](https://i.gyazo.com/111d6234c74eb1fc1c13944427b07c17.png)

![image3](https://i.gyazo.com/9c2cb3ba45c7387a7cbfe5981f4c3235.png)

# User Stories & Initial UX

**Landing Page**
Initial landing page has login and register option. It also has an explanation of what the app is for, user will login or register and then login and then click "Let's get started." Also, at the top of this page in the nav bar are links to Reflect, Create and Review. See more info on Reflect, Create, Review page below.
![image1]

**Answer Questions Page**
Step 1 User will answer all questions on page. Step 2 user lists values and beliefs. User will then click "Save and continue."

![image1]

**Instructions for creating SOP Page**
Step 3 User can choose to create SOP free-style by clicking "Create free-style" or use a template by clicking "Create with template." The template will be filled in with their answers from questions page. User can edit if desired.

![image1]

**Create Free-style Page**
Step 4 User creates SOP in textarea, then clicks "Save"

**Template Page**
Alternatively, Step 4 Users answers from the questions page will be inserted in input fields where user can alter text. User clicks "Save" to continue

![image1]

**Completed Statement of Purpose and Add Goals Page**
This page will have the users SOP displayed, along with a section to create goals. Once goals are created, user clicks "Save" to continue.

![image1]
**SOP, Values, Beliefs, Goals Page**
Users SOP is displayed along with their Values, Beliefs and Goals. They have the option to click the edit button on Values and Beliefs which will direct them back to the Answer Questions Page where they can update their answers, values and beliefs. User may also click the edit button for Goals which will direct them back to Completed Statement of Purpose and Add Goals Page.

![image1]
**Reflect, Create, Review Page**
Reflect: Directs user to their existing SOP, Values, Beliefs and Goals.
Create: Directs user to Instructions for creating SOP Page where they can alter their SOP, either by clicking "Create free-style" where their SOP will be displayed in the textarea or clicking "Create with template" where their answers from the questionaire will be displayed in the input fields.
Review: Directs user to Answer Questions Page where they can alter their answers, values and beliefs.



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
