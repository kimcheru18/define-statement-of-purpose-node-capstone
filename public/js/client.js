// step 1. Defining global variables

//1. User loads page
//  a. nav options
//        -Reflect takes user to existing SOP, Values, Beliefs and Goals
//        -Create takes user to edit page for SOP
//        -Review takes user to questions that they answered where they can edit answers including values and beliefs
//2. User has option to sign in, create new account or continue to create SOP
//3. User selects 'Let's get started'
//4. User enters answer in answer fields
//5. User clicks Save and Contiue.
//6. Once user has answered all questions, they have the option to create SOP free-style or use template
//7. If using template, user can alter text when finished filling in blank fields
//8. User clicks Save once finished writing SOP


//var questionsArray = [
//    //Question 1
//    {
//        questionText: 'What do I want to have accomplished for myself and for others by the end of my life?'
//    },
//
//    //Question 2
//    {
//        questionText: 'What strengths and talents do I posses?',
//        Answer: ""
//    },
//
//    //Question 3
//    {
//        questionText: 'Who are the people that I value most?',
//        questionChoices: questionCorrectChoice: correctDetails:
//    },
//
//    //Question 5
//    {
//        questionText: 'What are some ways I can enrich the lives of those that I love?',
//        questionChoices: questionCorrectChoice: correctDetails:
//    },
//
//    //Question 9
//    {
//        questionText: 'What are my core values?',
//        questionChoices: questionCorrectChoice: correctDetails:
//    },
//
//    //Question 10
//    {
//        questionText: 'What are my beliefs?',
//        questionChoices: questionCorrectChoice: correctDetails:
//    },
//];

var userName = "";
var userPassword = "";
var userAnswer = "";
var userGoals = "";




// step 2. Defining functions

// step 3. dynamically created layout to display home screen


//on page load, hide everything except header, sign-in page and footer



$(document).ready(function () {

    $('.hide-everything').hide();
    $('#login-sop').show();
    $('#sop-description-info').show();

    $('.nav-reflect').click(function () {
        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();
        //        $('.result-section').hide();
    });

    $('.nav-create').click(function () {
        $('.hide-everything').hide();
        $('#review').show();
        //        $('.result-section').hide();
    });

    $('.nav-review').click(function () {
        $('.hide-everything').hide();
        $('#questions').show();
        //        $('.result-section').hide();
    });

    $('.login-account').click(function () {
        $('.hide-everything').hide();
        //        $('#login-sop').show();
        $('#sop-description-info').show();
        //        $('.result-section').hide();

    });

    $('.go-register-account').click(function () {
        $('.hide-everything').hide();
        $('#register-new-sop').show();
        $('#sop-description-info').show();
        //        $('.result-section').hide();

    });

    $('.register-account').click(function () {
        $('.hide-everything').hide();
        $('#sop-description-info').show();
        //        $('.result-section').hide();

    });

    $('.start-button').click(function () {
        $('.hide-everything').hide();
        $('#questions').show();
        //        $('.result-section').hide();

    });

    $('.save-answers-button').click(function () {
        $('.hide-everything').hide();
        $('#review').show();
        //        $('.result-section').hide();

    });

    $('.create-sop-button').click(function () {
        $('.hide-everything').hide();
        $('#create').show();
        //        $('.result-section').hide();

    });

    $('.use-template-button').click(function () {
        $('.hide-everything').hide();
        $('#create-with-template').show();
        //        $('.result-section').hide();

    });

    $('.save-create-button').click(function () {
        $('.hide-everything').hide();
        $('#create-goals').show();
        //        $('.result-section').hide();

    });

    $('.save-create-template-button').click(function () {
        $('.hide-everything').hide();
        $('#create-goals').show();
        //        $('.result-section').hide();

    });

    $('.save-goals-button').click(function () {
        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();
        //        $('.result-section').hide();

    });
});
//});


//step 4. dynamically created layout to display questions



//step 5. dynamically created layout to display SOP create options (free-style or template)


//    **********Client.js**********
//    Navigation bar
//    Reflect - questions page where user answers/reviews questions
//    Create - create/review/edit SOP page
//    Review - review/edit SOP, Values, Beliefs, Goals
//
//    Login page or go to register
//    -Page loads
//    -Displays login/register options
//    -Existing user enters username and password
//    -takes user to the description/ “Let’s get started” page
//
//    Register page
//    -New user registers
//    -takes user to the description/ “Let’s get started” page
//
//    Description page
//    -User clicks “Let’s get started”
//    -User is directed to questions page
//
//    Question page
//    -User answers questions including listing values and beliefs
//    -User clicks “Save and continue” and is directed to “Reviews answers” page
//
//    Review answers page
//    -User chooses “Create free-style” or “Create with template” and is directed to the appropriate page
//
//
//
//    #1 Review answers and create SOP free-style
//    -User can still see answers and an open text box to write their SOP
//    -Once completed, user clicks save
//    -SOP is saved as fully editable text
//    -User is then directed to the create goals page
//
//    #2Review answers and create SOP with template
//    -User can still see answers and a template that will help them create their SOP
//    -Once completed, user clicks save
//    -SOP is saved as fully editable text
//    -User is then directed to the create goals page
//
//    Create goals page
//    -User creates their list of goals
//    -Once completed, user clicks save
//    -User is then directed to Display SOP page
//
//    Display SOP, values, beliefs and goals page
//    -SOP, values, beliefs and goals page
//    -User can edit sop, values, beliefs and goals
