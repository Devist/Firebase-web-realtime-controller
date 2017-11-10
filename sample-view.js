$(function() {

  var quizInfo;

  $('.bt_add').click(function() {
    var eventName = $('#addEventName').val();
    INSIGHT.MC.ViewService.addEvent(eventName);
  });

  $('.bt_choice').click(function(){
    var choicedEventName = $('#choiceEventName').val();
    INSIGHT.MC.ViewService.setEvent(choicedEventName);
    alert($('#choiceEventName').val() + "와 관련된 퀴즈 화면을 제어합니다.");
    quizInfo = INSIGHT.MC.ViewService.getQuizInfo();
    showQuizView();
  });

  showQuizView = function(){
    if(quizInfo!=null){
      quizInfo.on('child_changed', function(data) {
        console.log(data.val());
        $('#myView').append("[퀴즈]:"+data.val().quizNum + ""
                                + ", [타입]:" + data.val().quizType
                                + "[상태]:" + data.val().viewState+'<br>');
      });
    }
  };

});
