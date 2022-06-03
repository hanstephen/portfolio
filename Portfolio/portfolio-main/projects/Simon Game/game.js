var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var firstKeyPress = true;

//Keyboard press

$(document).keydown(function() {

  if (firstKeyPress) {

    nextSequence();

  }

  firstKeyPress = false;

})

//On Click

$(".btn").click(function() {

  var button = $(this);

  var chosenColor = button.attr("id");

  userClickedPattern.push(chosenColor);

  playSound(chosenColor);

  animatePress(button);

  var lastAnswerIndex = userClickedPattern.length - 1;

  checkAnswer(lastAnswerIndex);

});

function nextSequence() {

  $("h1").text(`Level ${level++}`);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  //Animation

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  //Sound

  playSound(randomChosenColor);

};

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    var userClicks = currentLevel + 1;

    if (userClicks === gamePattern.length) {

      setTimeout(function() {

        nextSequence()

        userClickedPattern = [];

      }, 1000);

    };

  } else {

    var wrongSound = new Audio("sounds/wrong.mp3");

    wrongSound.play();

    $("body").addClass("game-over");

    setTimeout(function() {

      $("body").removeClass("game-over");

    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();

  };

};

function startOver() {

  level = 0;

  gamePattern = [];

  userClickedPattern = [];

  firstKeyPress = true;

};

//sound

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();

};

//Animation

function animatePress(button) {

  button.addClass("pressed");

  setTimeout(function() {

    button.removeClass("pressed");

  }, 100)

};
