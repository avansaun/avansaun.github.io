$(document).ready(function() {
  requestData("worldEmotion");
});

function requestData(whatToFetch, emotion) {
  if (whatToFetch === "worldEmotion") {
    $.getJSON("http://wefeel.csiro.au/api/emotions/primary/totals", function(result) {
      var primaryEmotion;
      var primaryEmotionIndex = 0;
      var currentHighestCount = 0;
      var keys = Object.keys(result);
      for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (result[key] > currentHighestCount && key !== "*") {
          primaryEmotionIndex = i;
          currentHighestCount = result[key]
        }
      }
      setMood(keys[primaryEmotionIndex]);
    });
  } else if (whatToFetch === "secondary" && emotion !== undefined) {
    var endUrl = "http://wefeel.csiro.au/api/emotions/primary/" + emotion + "/secondary/totals";
    $.getJSON(endUrl, function(result) {
      var secondaryEmotion;
      var secondaryEmotionIndex = 0;
      var currentHighestCount = 0;
      var keys = Object.keys(result);
      for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (result[key] > currentHighestCount && key.indexOf("*") === -1) {
          secondaryEmotionIndex = i;
          currentHighestCount = result[key]
        }
      }
      $("#worldMoodText").replaceWith(keys[secondaryEmotionIndex].split("/")[1]);
    });
  }
}

function setMood(emotionToShow) {
  if (emotionToShow === "joy") {
    $(".mainContainer").css('background-color', 'rgba(230,230,0,0.7)');
    $("#worldMoodText").append("Joy");
  } else if (emotionToShow === "anger") {
    $(".mainContainer").css('background-color', 'rgba(255,92,51,0.6)');
    $("#worldMoodText").append("Anger");
  } else if (emotionToShow === "sadness") {
    $(".mainContainer").css('background-color', 'rgba(51,133,255,0.6)');
    $("#worldMoodText").append("Sadness");
  } else if (emotionToShow === "fear") {
    $(".mainContainer").css('background-color', 'rgb(64,64,64)');
    $("#worldMoodText").append("Fear");
  } else if (emotionToShow === "love") {
    $(".mainContainer").css('background-color', 'rgba(255,102,255,0.7)');
    $("#worldMoodText").append("Love");
  } else if (emotionToShow === "surprise") {
    $(".mainContainer").css('background-color', 'rgba(92,214,92,0.6)');
    $("#worldMoodText").append("Surprise");
  } else if (emotionToShow === "other") {
    $(".mainContainer").css('background-color', 'rgba(255,133,51,0.6)');
    $("#worldMoodText").append("Mixed");
  }
  // setSecondaryMood(emotionToShow);
}

function setSecondaryMood(primaryEmotion) {
  console.log(primaryEmotion);
  var secondaryEmotion = requestData("secondary", primaryEmotion);
}
