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
var loggedInUser = "";
var usersAnswers = [];
var usersSavedAnswers = [];

var questionsArray = [
    //Question 1
    {
        questionText: 'What do I want to have accomplished for myself and for others by the end of my life?',
        Answer: ""
    },

    //Question 2
    {
        questionText: 'What strengths and talents do I posses?',
        Answer: ""
    },

    //Question 3
    {
        questionText: 'Who are the people that I value most?',
        Answer: ""
    },

    //Question 5
    {
        questionText: 'What are some ways I can enrich the lives of those that I love?',
        Answer: ""
    },

    //Question 9
    {
        questionText: 'What are my core values?',
        Answer: ""
    },

    //Question 10
    {
        questionText: 'What are my beliefs?',
        Answer: ""
    },
];





// step 2. Defining functions

// step 3. dynamically created layout to display home screen





$(document).ready(function () {

    $('.hide-everything').hide();
    $('#login-sop').show();
    $('#sop-description-info').show();

    $('.nav-reflect').click(function () {
        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();
    });

    $('.nav-create').click(function () {
        $('.hide-everything').hide();
        $('#review').show();
    });

    $('.nav-review').click(function () {
        $('.hide-everything').hide();
        $('#questions').show();
    });

    $('.login-account').click(function () {

        const inputUname = $('.signin-username').val();
        const inputPw = $('.signin-password').val();

        if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
            alert('Please enter a valid username');
        } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
            alert('Invalid password');
        } else {
            const unamePwObject = {
                username: inputUname,
                password: inputPw
            };
            user = inputUname;
            $.ajax({
                    type: "POST",
                    url: "/users/signin",
                    dataType: 'json',
                    data: JSON.stringify(unamePwObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    console.log(result);
                    loggedInUser = result;
                    // show the signout link in header as soon as user is signed in
                    $('.hide-everything').hide();
                    $('#sop-description-info').show();
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                    alert('Invalid username and password combination. Pleae check your username and password and try again.');
                });
        };




    });

    $('.go-register-account').click(function () {
        $('.hide-everything').hide();
        $('#register-new-sop').show();
        $('#sop-description-info').show();

    });

    $('.register-account').click(function () {


        const uname = $('.register-username').val();
        const pw = $('.register-password').val();
        const confirmPw = $('.register-confirm-password').val();
        if (uname == "") {
            event.preventDefault();
            alert('Please specify username');
        } else if ((pw !== confirmPw) || (pw == "")) {
            event.preventDefault();
            alert('Passwords must match and not be empty!');
        } else {
            event.preventDefault();
            const newUserObject = {
                username: uname,
                password: pw
            };
            // will assign a value to variable 'user' in signin step below
            // AJAX call to send form data up to server/DB and create new user
            $.ajax({
                    type: 'POST',
                    url: '/users/create',
                    dataType: 'json',
                    data: JSON.stringify(newUserObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    event.preventDefault();
                    //                    newUserToggle = true;
                    alert('Thanks for signing up! You may now sign in with your username and password.');

                    $('.hide-everything').hide();
                    $('#sop-description-info').show();
                    //                    showSignInPage();
                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
        };

    });

    $('.start-button').click(function () {
        console.log(loggedInUser);
        $('.logged-in-username').val(loggedInUser);
        $('.hide-everything').hide();
        $('#questions').show();
    });

    $('.save-answers-button').click(function () {
        event.preventDefault();
        let answer1 = $('.js-answer1').val();
        let answer2 = $('.js-answer2').val();
        let answer3 = $('.js-answer3').val();
        let answer4 = $('.js-answer4').val();
        let answer5 = $('.js-answer5').val();
        let answer6 = $('.js-answer6').val();
        let sopLoggedInUser = $('.logged-in-username').val();
        //        console.log(answer1, answer2, answer3, answer4, answer5, answer6, sopLoggedInUser);
        if ((answer1 === "") && (answer2 === "") && (answer3 === "") && (answer4 === "") && (answer5 === "") && (answer6 === "")) {
            alert("Please create your Statement of Purpose");
            return;
        } else {
            usersAnswers.push(answer1, answer2, answer3, answer4, answer5, answer6, sopLoggedInUser);
            console.log(usersAnswers);

            for (i = 0; i < usersAnswers.length; i++) {
                $('.js-connect-answer' + (i + 1)).text(usersAnswers[i])
            };

            $('.hide-everything').hide();
            $('#review').show();
        }


    });
    //});


    $('.create-sop-button').click(function () {
        $('.hide-everything').hide();
        $('#create').show();
    });

    $('.use-template-button').click(function () {
        $('.hide-everything').hide();
        $('#create-with-template').show();

    });

    $('.save-completed-button').click(function () {

        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();

    });

    $('.save-completed-template-button').click(function () {
        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();
    });

    $('.set-goals').click(function () {
        $('.hide-everything').hide();
        $('#create-goals').show();
    });

    $('.save-goals-button').click(function () {
        $('.hide-everything').hide();
        $('#completed-sop').show();
        $('#values-beliefs-goals').show();
    });
});





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
