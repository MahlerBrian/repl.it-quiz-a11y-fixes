//This is the array of objects to display all of the questions, choices, and to check user's answers:
let questions = [
  {
    question:"Question 1: The movie \"Goodfellas\" was based on the memoir \"Wise Guys\" by what author?",
    answer1Description:"A. Mario Puzo",
    answer2Description:"B. Elliot Ness",
    answer3Description:"C. Henry Hill",
    answer4Description:"D. David Chase",
    correctAnswer:"C",
    answerDescription: "C. Henry Hill"
  },
  {
    question:"Question 2: The movie \"Donnie Brasco\" was based on the life of what undercover FBI agent?",
    answer1Description:"A. Donnie Brasco",
    answer2Description:"B. Joe Pistone",
    answer3Description:"C. J. Edgar Hoover",
    answer4Description:"D. Johnny Incognito",
    correctAnswer:"B", 
    answerDescription:"B. Joe Pistone"
  },
  {
    question:"Question 3: \"The Godfather\" trilogy was directed by:",
    answer1Description:"A. Francis Ford Coppola",
    answer2Description:"B. Stanley Kubrick",
    answer3Description:"C. Martin Scorcese",
    answer4Description:"D. Peter Bogdanovich",
    correctAnswer:"A",
    answerDescription:"A. Francis Ford Coppola"
  },
  {
    question:"Question 4: Robert DeNiro\'s character in \"A Bronx Tale\" does this for a living:",
    answer1Description:"A. Bus Driver",
    answer2Description:"B. Taxi Driver",
    answer3Description:"C. Marathon Man",
    answer4Description:"D. Hit Man",
    correctAnswer:"A",
    answerDescription:"A. Bus Driver"
  },
  {
    question:"Question 5: Which two actors played the role of the same character in the first two \"Godfather\" movies?",
    answer1Description:"A. Robert DeNiro and Al Pacino",
    answer2Description:"B. Robert DeNiro and Robert Duval",
    answer3Description:"C. Robert DeNiro and Marlon Brando",
    answer4Description:"D. James Caan and John Cazale",
    correctAnswer:"C",
    answerDescription:"C. Robert DeNiro and Marlon Brando"
  },
  {
    question:"Question 6: The famous knife fight scene in \"Eastern Promises\" takes place in a:",
    answer1Description:"A. Dark alley",
    answer2Description:"B. Kitchen",
    answer3Description:"C. Jail Cell",
    answer4Description:"D. Bath House",
    correctAnswer:"D",
    answerDescription:"D. Bath House"
  },
  {
    question:"Question 7: What E.L. Doctorow novel about the gangster Dutch Schultz was made into a movie in 1991?",
    answer1Description:"A. Ragtime",
    answer2Description:"B. Billy Bathgate",
    answer3Description:"C. Loon Lake",
    answer4Description:"D. World\'s Fair",
    correctAnswer:"B",
    answerDescription:"B. Billy Bathgate"
  },
  {
    question:"Question 8: Which actress was originally cast to play Michael Corleone\'s daughter in \"The Godfather Part III?\"",
    answer1Description:"A. Elisabeth Shue",
    answer2Description:"B. Molly Ringwald",
    answer3Description:"C. Demi Moore",
    answer4Description:"D. Winona Ryder",
    correctAnswer:"D",
    answerDescription:"D. Winona Ryder"
  },
  {
    question:"Question 9: How many actors in \"Goodfellas\" also appeared in the HBO series \"The Sopranos?\"",
    answer1Description:"A. 27",
    answer2Description:"B. 19",
    answer3Description:"C. 8",
    answer4Description:"D. 4",
    correctAnswer:"A",
    answerDescription:"A. 27"
  },
  {
    question:"Question 10: As depicted in the movie \"The Untouchables,\" Al Capone was ultimately convicted for:",
    answer1Description:"A. Murder",
    answer2Description:"B. Bootlegging",
    answer3Description:"C. Jaywalking",
    answer4Description:"D. Income Tax Evasion",
    correctAnswer:"D", 
    answerDescription:"D. Income Tax Evasion"
  }
]


function renderStartScreen() {
  //when the start button is clicked
  $('.start-button').on('click',() => {
    $('.start-screen').slideUp(400,() => {});
    renderQuizScreen(0); 
  });
}


function renderQuizScreen(i, points) {
  $('#quiz-form').slideDown(() => {
    $(".question").text(questions[i].question);
    $("#quiz-form label:eq(0)").text(questions[i].answer1Description);
    $("#quiz-form label:eq(1)").text(questions[i].answer2Description);
    $("#quiz-form label:eq(2)").text(questions[i].answer3Description);
    $("#quiz-form label:eq(3)").text(questions[i].answer4Description);
    $(".multiple-choice").attr("name","question" + i);
  });
}


//when an answer is submitted on form
let answer, j = 0, points = 0; 
$("#quiz-form").on("submit", (event) => {
    event.preventDefault();
    answer = $("[name='question" + j + "']:checked").val();
    console.log('questions j .correctAnswer',questions[j].correctAnswer);
    console.log('answer', answer);
    let correctMessage = "Correct! Eyyy!";
    let incorrectMessage = "Oh! Incorrect! The correct answer was ";
    if (questions[j].correctAnswer == answer) {
      points++;
      $(".answer-result.question" + j).addClass("correct");
      $(".answer-feedback").text(correctMessage);
    } 
    else {
      $(".answer-result.question" + j).addClass("incorrect");
      $(".answer-feedback").text(incorrectMessage + questions[j].answerDescription);
    }
    j++;
    if (j > 9) {
      $('#quiz-form').slideUp(400,() => {});
      renderFinalScore();
      return;
    }
      
    renderQuizScreen(j, points)
    console.log(points);
})



$("button[type='reset']").on("click", (event) => {
  event.preventDefault();
  let r = confirm("Are you sure you want to reset the quiz? Your current score will not be saved.");
  if (r == true) {
    $('#quiz-form').slideUp(400,() => {});
    $('#final-screen').slideUp(400,() => {});
    $('.start-screen').slideDown(400,() => {});
    $(".answer-result").removeClass("correct incorrect");
  }
  points = 0;
  j = 0;
})


//grabs the selected multiple choice option
$("select.multiple-choice option:checked" ).val();



//when user reaches the end of the quiz
function renderFinalScore() {
  let passingScore = "Your final score is " + points + ". Be my friend, Godfather?";
  let failingScore = "Your final score is " + points + ". You\'re funny. Like a clown. You amuse me.";
    $("#final-screen").slideDown(() => {
      if (points >= 8) {
        $(".result-message").text(passingScore);
        $('#final-screen img').attr('src', 'https://media.giphy.com/media/8yiDY4z4MvCFO/giphy.gif');
      }  
      else {
        $(".result-message").text(failingScore);
        $('#final-screen img').attr('src', 'https://media.giphy.com/media/I4Jmrcjnr8Zfq/giphy.gif');
      }
    })
}





renderStartScreen();