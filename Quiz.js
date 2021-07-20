class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      //button = new Question();
      question.display();
     // button.display();
    }
  }

  play(){
    //write code here to hide question elements
   question.hide();
    //write code to change the background color here
background("yellow");


    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(35);
text("Result of Quiz", 350, 50);
text("_ _ _ _ _ _ _ _ ", 350, 60);
    //call getContestantInfo( ) here
Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
   
         
    //write code to add a note here
    if(allContestants !== undefined){
      debugger;
      var displayPosition = 225;
         fill("blue");
    textSize(25);
    text("*NOTE : Contestant who answered correct are highlighted in green colour!", 20, 225);
    for(var plr in allContestants){
      debugger;
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
        fill("Green");
      else
        fill("red");
      
      displayPosition+= 50;
      textSize(20);
      text(allContestants[plr].name + ":" + allContestants[plr].answer, 100, displayPosition);
    }
  }
    }
    //write code to highlight contest who answered correctly
   

}
