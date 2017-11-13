//1. User selects 'Let's begin'
//2. User enters answer in answer field
//3. User clicks 'Next'
//4. From second question on, user has the option to click 'Back' or 'Next'
//5.

var questionsArray = [
    //Question 1
        {
            questionText: 'What brings me true happiness in life?',
            questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 2
        {
            questionText: 'What are my main personality traits?',
            questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 3
        {
            questionText: 'Who do I respect and what and what qualities do I see in them that I would like to emulate?',
            questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 4
        {
            questionText: 'What strengths do I posses?',
            questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 5
        {
            questionText: 'What are my weaknesses?',
            questionChoices: questionCorrectChoice: correctDetails:
    },


    //Question 6
        {
            questionText: 'If I could do anything with my time and money wasn’t an object, what would that look like?',
            questionChoices: questionCorrectChoice: correctDetails:
    },


    //Question 7
        {
            questionText: 'What do I want to have accomplished by the end of my life?',
            questionChoices: questionCorrectChoice: correctDetails:
    },

    //Question 8
        {
            questionText: 'What will I regret not doing?',
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


    var currentQuestionNumber = 0;
    var totalNumberOfQuestions = quesstionsArray.length;

//    Step 2. defining functions

//    display description info (Your assignment, why create a SOP) along with "Let's get started"
    function displayDescription() {

    }


    // display question text that requires single essay answer
    function displayQuestionSingle() {
            $('.question').text(questionsArray[currentQuestionNumber].questionText);
    }
    // 1. user types answer in input field
    // 2. on 'click' user submits answer
    // 3. next question appears (repeat 1 and 2)


    // display question text that requires multiple answers
    function displayQuestionMulti() {
            $('.values-beliefs').text(questionsArray[currentQuestionNumber].questionText);
    }

    //display "Review Your Answers" text

    //display questions with users answers

    //display option to "Create SOP" free-style or use Template

    //display SOP, My Values, My Beliefs, My Goals

    //always display navigation bar

    //clicking on links will display links to other web pages with more information

// Step 3. Using functions
$(document).ready(function () {

            //on page load, hide questions, completed-questions, create-sop, completed-sop-vbg, keep intro section only
            $('.questions').hide();
            $('.completed-questions').hide();
            $('.create-sop').hide();
            $('.completed-sop-vbg').hide();
            //start button trigger (onClick) in order to hide the intro container and display the question container
            $('.start-button').click(function () {
                $('.welcome-page').hide();
                $('.description-info').hide();
                $('.questions').show();
                $('.completed-questions').hide();
                $('.create-sop').hide();
                $('.completed-sop-vbg').hide();
                displayQuestionSingle();
            });
        });
