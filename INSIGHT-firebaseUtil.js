/* COPYRIGHT 2017 LDCC LAB. ALL RIGHTS RESERVED.
 * 이 라이브러리는 롯데정보통신 교육용 솔루션에 사용됩니다.
*/

var INSIGHT = new Object();
INSIGHT.config = {
     apiKey: "AIzaSyDSqZz9rm-jeQg-e5R_KQ2ZHKAZq3miZvw",
     authDomain: "insight-324c9.firebaseapp.com",
     databaseURL: "insight-324c9.firebaseio.com",
     projectId: "insight-324c9",
     storageBucket: "insight-324c9.appspot.com",
     messagingSenderId: "352349008150"
   };

INSIGHT.firebase = firebase;
INSIGHT.firebase.initializeApp(INSIGHT.config);
INSIGHT.MC = new Object();
INSIGHT.Audience = new Object();

/**
 * Class: INSIGHT.MC.Setting
 * 진행자의 리모컨 동작을 하는데 사용됩니다.
 * 현재 진행 중인 행사명, 퀴즈 시작, 정답 화면 보여주기 등의 리모컨 동작을 합니다.
 */
INSIGHT.MC.ViewService={

	quizInfo: null,

	/**
   * Parameters:
	 * eventName - {String} 행사명, 또는 강의명
	 */
	addEvent : function(eventName){
		INSIGHT.firebase.database().ref('/INSIGHT/'+eventName+'/quizINFO').set({
			quizNum:"1",
			quizType:"type",
			viewState:'STOP'
		});
	},

	setEvent : function(eventName){
			quizInfo = INSIGHT.firebase.database().ref('/INSIGHT/'+eventName);
	},

	getQuizInfo : function(){
		if(quizInfo!=null)
					return quizInfo;
	},
};

INSIGHT.MC.remoteController={

		setEvent : function(eventName){
				INSIGHT.MC.eventName = eventName;
		},

		showQuiz : function(quizNum,type){
				INSIGHT.firebase.database().ref('/INSIGHT/' + INSIGHT.MC.eventName + '/quizINFO').set({
					quizNum:quizNum,
					quizType:type,
					viewState:'RUN'
				});
		},

		showAnswer : function(quizNum,type){
			INSIGHT.firebase.database().ref('/INSIGHT/'+INSIGHT.MC.eventName+'/quizINFO/').set({
				quizNum:quizNum,
				quizType:type,
				viewState:'RESULT'
			});
		},

		stopQuiz : function(quizNum,type){
			INSIGHT.firebase.database().ref('/INSIGHT/'+INSIGHT.MC.eventName+'/quizINFO/').set({
				quizNum:quizNum,
				quizType:type,
				viewState:'STOP'
			});
		}
};

INSIGHT.Audience.remoteController={
	quizInfo: null,

	setEvent : function(eventName){
			INSIGHT.MC.eventName = eventName;
			quizInfo = INSIGHT.firebase.database().ref('/INSIGHT/'+eventName);
	},

	getQuizInfo : function(){
		if(quizInfo!=null)
					return quizInfo;
	},
}
