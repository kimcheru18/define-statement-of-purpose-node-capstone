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


var questionsArray = [
    //Question 1
    {
        questionText: 'What do I want to have accomplished for myself and for others by the end of my life?'
    },

    //Question 2
    {
        questionText: 'What strengths and talents do I posses?',
        questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 3
    {
        questionText: 'Who are the people that I value most?',
        questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 5
    {
        questionText: 'What are some ways I can enrich the lives of those that I love?',
        questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 9
    {
        questionText: 'What are my core values?',
        questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 10
    {
        questionText: 'What are my beliefs?',
        questionChoices: questionCorrectChoice: correctDetails:
    },


    // step 2. Defining functions

    // step 3. dynamically created layout to display home screen

    function displayLoginPage() {
        $('.sign-in-sop')
    }


    //on page load, hide everything except header, sign-in page and footer

$(document).ready(function () {

            $('.sign-in-sop').show();
            $('.register-new-sop').hide();
            $('.sop-description-info').hide();
            $('.questions').hide();
            $('.create').hide();
            $('.create-with-template').hide();
            $('.create-goals').hide();
            $('.completed-sop').hide();
            $('.values-beliefs-goals').hide();

        }
        });


    //step 4. dynamically created layout to display questions



    //step 5. dynamically created layout to display SOP create options (free-style or template)
