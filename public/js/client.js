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
var usersCompletedSop = [];

//added: 12/11/17 to hold user data to be populated to appropriate fields on login
var retrieveUserSop = {};

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
function displayUpdatedStatement(username) {
    $.ajax({
            type: 'GET',
            url: '/statements/' + username,
            dataType: 'json',
            contentType: 'application/json'
        })
        .done(function (result) {
            console.log(result);
            //***************added: grab variable with user data************
            retrieveUserSop = result;
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

}
//*****added: adding function to grab variable that holds user data. What is the previous function doing? should data be added to that?? So i've targeted where each part should be displayed in the app, how do I grab date from the variable to populate info? *************
function getUserSop() {
    $('.purpose').text(body);
    $('.values').text(values);
    $('.beliefs').text(beliefs);
    $('.goals-ul').text(goals);
}


// step 3. dynamically created layout to display home screen


$(document).ready(function () {

    $('.hide-everything').hide();
    $('#login-sop').show();
    $('#sop-description-info').show();

    //user cannot click Reflect unless they have already created SOP, Values, Beliefs
    //needs to be an "if" statement. If user has not completed question section, user cannot Reflect"
    $('.nav-reflect').click(function () {

        let answer1 = $('.js-answer1').val();
        let answer2 = $('.js-answer2').val();
        let answer3 = $('.js-answer3').val();
        let answer4 = $('.js-answer4').val();
        let answer5 = $('.js-answer5').val();
        let answer6 = $('.js-answer6').val();
        let goals = $('.my-goals').val();
        let sopLoggedInUser = $('.logged-in-username').val();

        if ((answer1 == "") || (answer2 == "") || (answer3 == "") || (answer4 == "") || (answer5 == "") || (answer6 == "") || (goals == "")) {
            alert("Please complete questionaire and create goals");
            return;
        } else {

            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#completed-sop').show();
            $('#values-beliefs-goals').show();

        };
    });


    //user cannot click Create until answers have been filled in
    $('.nav-create').click(function () {

        let answer1 = $('.js-answer1').val();
        let answer2 = $('.js-answer2').val();
        let answer3 = $('.js-answer3').val();
        let answer4 = $('.js-answer4').val();
        let answer5 = $('.js-answer5').val();
        let answer6 = $('.js-answer6').val();
        let sopLoggedInUser = $('.logged-in-username').val();

        if ((answer1 == "") || (answer2 == "") || (answer3 == "") || (answer4 == "") || (answer5 == "") || (answer6 == "")) {
            alert("Please complete questionaire");
            return;
        } else {

            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#review').show();

        };
    });


    //user cannot click Review until SOP, Values, Beliefs and Goals are complete
    $('.nav-review').click(function () {

        let answer1 = $('.js-answer1').val();
        let answer2 = $('.js-answer2').val();
        let answer3 = $('.js-answer3').val();
        let answer4 = $('.js-answer4').val();
        let answer5 = $('.js-answer5').val();
        let answer6 = $('.js-answer6').val();
        let goals = $('.my-goals').val();
        let sopLoggedInUser = $('.logged-in-username').val();

        if ((answer1 == "") || (answer2 == "") || (answer3 == "") || (answer4 == "") || (answer5 == "") || (answer6 == "") || (goals == "")) {
            alert("Please complete questionaire and create goals");
            return;
        } else {

            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#create').show();
        };
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
                    $('.navigate-options').show();
                    $('#finalLoggedinUser').val(loggedInUser);
                    displayUpdatedStatement(loggedInUser);
                    getUserSop();
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
        $('#register-new-user').show();
        $('#sop-description-info').show()
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
                    $('#login-sop').show();

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
        if (!(loggedInUser)) {
            alert('Please login or register');
        } else {
            $('.logged-in-username').val(loggedInUser);
            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#questions').show();
        };
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

        if ((answer1 == "") || (answer2 == "") || (answer3 == "") || (answer4 == "") || (answer5 == "") || (answer6 == "")) {
            alert("Please complete each field");
            return;
        } else {

            $('.js-completed-sop1').val(answer1);
            $('.js-completed-sop2').val(answer2);
            $('.js-completed-sop3').val(answer3);
            $('.js-completed-sop4').val(answer4);
            console.log(answer1, answer2, answer3, answer4, answer5, answer6, sopLoggedInUser);
            $('#finalValues').val(answer5);
            $('#finalBeliefs').val(answer6);


            usersAnswers.push(answer1, answer2, answer3, answer4, answer5, answer6, sopLoggedInUser);
            console.log(usersAnswers);

            for (let i = 0; i < usersAnswers.length; i++) {
                $('.js-connect-answer' + (i + 1)).text(usersAnswers[i]);
                //                $('.js-completed-sop' + (i + 1)).val(usersAnswers[i]);
            };

            $('.js-connect-answer5').html("");
            $('#values-beliefs-goals .values ul').html("");

            let valuesArray = answer5.split(",");
            for (let j = 0; j < valuesArray.length; j++) {
                $('#values-beliefs-goals .values ul').append("<li>" + valuesArray[j] + "</li>");
                $('.js-connect-answer5').append("<li>" + valuesArray[j] + "</li>");
            };


            $('.js-connect-answer6').html("");
            $('#values-beliefs-goals .beliefs ul').html("");

            let beliefsArray = answer6.split(",");
            for (let h = 0; h < beliefsArray.length; h++) {
                $('#values-beliefs-goals .beliefs ul').append("<li>" + beliefsArray[h] + "</li>");
                $('.js-connect-answer6').append("<li>" + beliefsArray[h] + "</li>");
            };

            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#review').show();
        };
    });




    $('.create-sop-button').click(function () {
        $('.hide-everything').hide();
        $('.navigate-options').show();
        $('#create').show();
    });




    $('.use-template-button').click(function () {
        $('.hide-everything').hide();
        $('.navigate-options').show();
        $('#create-with-template').show();

    });



    $('.save-completed-button').click(function () {

        event.preventDefault();
        let createSopFreeStyle = $('.create-text').val();
        if (createSopFreeStyle == "") {
            alert("Please create Statement of Purpose");
            return;
        } else {

            usersCompletedSop.push(createSopFreeStyle);
            console.log(usersCompletedSop);

            $('#completed-sop .purpose p').html(createSopFreeStyle);

            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#completed-sop').show();
            $('#create-goals').show();
            $('#finalSopBody').val(createSopFreeStyle);
        };
    });



    $('.save-completed-template-button').click(function () {

        event.preventDefault();
        let createSopSentence1 = $('.js-completed-sop1').val();
        let createSopSentence2 = $('.js-completed-sop2').val();
        let createSopSentence3 = $('.js-completed-sop3').val();
        let createSopSentence4 = $('.js-completed-sop4').val();
        if ((createSopSentence1 == "") || (createSopSentence2 == "") || (createSopSentence3 == "") || (createSopSentence4 == "")) {
            alert("Please create Statement of Purpose");
            return;
        } else {
            let createSopTemplate = "It is my purpose to " + createSopSentence1 + ". I will grow and develop my " + createSopSentence2 + ". The people that are most important to me are " + createSopSentence3 + ". I will strive to " + createSopSentence4 + ".";


            $('#completed-sop .purpose p').html("");
            $('#completed-sop .purpose p').append("<p>" + createSopTemplate + "</p>");

            $('#finalSopBody').val(createSopTemplate);

        }

        $('.hide-everything').hide();
        $('.navigate-options').show();
        $('#completed-sop').show();
        $('#create-goals').show();
    });




    $('.save-goals-button').click(function () {
        let user = $('#finalLoggedinUser').val();
        let body = $('#finalSopBody').val();
        let values = $('#finalValues').val();
        let beliefs = $('#finalBeliefs').val();
        let goals = $('.my-goals').val();
        if (goals == "") {
            alert("Please create goals");
            return;
        } else {
            console.log(goals);
            $('#values-beliefs-goals .goals ul').html("");
            let goalsArray = goals.split(",");
            for (let k = 0; k < goalsArray.length; k++) {
                $('#values-beliefs-goals .goals ul').append("<li>" + goalsArray[k] + "</li>");
            };
            $('.hide-everything').hide();
            $('.navigate-options').show();
            $('#completed-sop').show();
            $('#values-beliefs-goals').show();

            const userStatementObject = {
                user: user,
                body: body,
                values: values,
                beliefs: beliefs,
                goals: goals
            }
            console.log(userStatementObject);

            $.ajax({
                    type: 'POST',
                    url: '/statements/create',
                    dataType: 'json',
                    data: JSON.stringify(userStatementObject),
                    contentType: 'application/json'
                })
                .done(function (result) {
                    console.log("here");

                })
                .fail(function (jqXHR, error, errorThrown) {
                    console.log(jqXHR);
                    console.log(error);
                    console.log(errorThrown);
                });
            displayUpdatedStatement(user);
        }
    });
});
