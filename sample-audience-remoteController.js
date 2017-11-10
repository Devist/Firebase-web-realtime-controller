$(function() {

  var quizInfo;

  $('.enter_btn').click(function() {
    var eventName = $('#className').val();
    INSIGHT.Audience.remoteController.setEvent(eventName);
    quizInfo = INSIGHT.Audience.remoteController.getQuizInfo();
    showRemoteView();
  });

  showRemoteView = function() {
    if (quizInfo != null) {
      quizInfo.on('child_changed', function(data) {
        var viewState   = data.val().viewState;
        var quizType    = data.val().quizType;
        var quizNum     = data.val().quizNum

        if (viewState == 'RUN') {
          $('#myQuizNum').append("퀴즈 번호 : " + quizNum);
          if (quizType == 'OX')
            refreshRemoteView("[OX 퀴즈 리모컨]이 실행중입니다.");
          if (quizType == 'Objective')
            refreshRemoteView("OX 퀴즈 리모컨이 실행중입니다.");
          if (quizType == 'Subjective')
            refreshRemoteView("OX 퀴즈 리모컨이 실행중입니다.");
          }
        else {
          refreshRemoteView("퀴즈 마감, 또는 진행중인 퀴즈가 없습니다.");
        }
      });
    } else {
      refreshRemoteView("강의 선택을 먼저 해주세요.")
    }
  };

  refreshRemoteView = function(viewString) {
    $('#myView').empty();
    $('#myView').append("현재 리모컨 상태: " + viewString);
  }

});
