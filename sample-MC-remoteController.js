$(function() {

  var quizInfo;

  $('.run_btn').click(function() {
    console.log("hello");
    var className = $('#className').val();
    var quizNum   = $('#quizNumber').val();
    var quizType  = $('#quizType').val();

    INSIGHT.MC.remoteController.setEvent(className);
    INSIGHT.MC.remoteController.showQuiz(quizNum,quizType);

  });

  $('.result_btn').click(function() {
    var className = $('#className').val();
    var quizNum = $('#quizNumber').val();
    var quizType = $('#quizType').val();

    INSIGHT.MC.remoteController.setEvent(className);
    INSIGHT.MC.remoteController.showAnswer(quizNum,quizType);
  });


  $('.stop_btn').click(function() {
    var className = $('#className').val();
    var quizNum = $('#quizNumber').val();
    var quizType = $('#quizType').val();

    INSIGHT.MC.remoteController.setEvent(className);
    INSIGHT.MC.remoteController.stopQuiz(quizNum,quizType);
  });

});
