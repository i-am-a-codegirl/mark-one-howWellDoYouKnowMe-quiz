var readlineSync= require("readline-sync");
var score = 0;
const chalk = require('chalk');

var userName = readlineSync.question("may I have your name boss!")

console.log(chalk.red.bgWhiteBright.bold("Cheers" + " " + chalk.cyan(userName) + "!" + "Let's start the quiz and I believe you know me really well"));
console.log(chalk.cyan("-----------------------"));


function achievement(score){
  if (score == 2){
    console.log(chalk.red.bgWhiteBright.underline("Congoo!! you have got two answers right"));
    console.log(chalk.cyan.bold("you are MY GOOD FRIEND and you HAVE EARNED A GOOD FRIEND BATCH => 🥉"));
   console.log(chalk.cyan.italic("keep playing to earn more badges"));
  }

  if (score == 4){
    console.log(chalk.red.bgWhiteBright.underline("Congoo!! you have got four answers right"));
    console.log(chalk.cyan.bold("you are MY CLOSE FRIEND and you HAVE EARNED A CLOSED FRIEND BATCH => 🥇"));
   console.log(chalk.cyan.italic("keep playing to earn more badges"));
  }

  if (score == 6){
    console.log(chalk.red.bgWhiteBright.underline("Congoo!! you have got all 7 answers right"));
    console.log(chalk.cyan.bold("you are MY DEAREST FRIEND and you HAVE EARNED THE HIGHEST RANK BATCH  => 🎖️"));
   console.log(chalk.cyan.italic("Kudos my friend..❤️‍🔥..I AM SO GLAD I HAVE YOU IN MY LIFE"));
  }
}

function highBadge(score){
  console.log(chalk.cyan.bgWhiteBright.bold("hey!friend🤟🏻 BEFORE LEAVING WON'T YOU NEED TO CHECK THE TOTAL BADGES YOU EARN"));
  if(score==2){
    console.log("your have earned one badge => 🥉");
  }
  else if( score>2 && score<4){
   console.log("your have earned one badge => 🥉");
  }
  else if (score == 4){
    console.log(chalk.cyan("oh congo friend you have earned two badges => 🥉+🥇"));
  }
  else if(score>4 && score<6){
    console.log(chalk.cyan("oh congo friend you have earned two badges => 🥉+🥇"));
  }
  else if(score==6){
    console.log(chalk.cyan("Yippey!! you have earned all the three badges...=> 🥉+🥇+🎖️"));
  }
}

function play(question,answer){
userAnswer = readlineSync.question(chalk.red.italic(question));

if(userAnswer===answer){
console.log("you were right!");
score = score + 1;
achievement(score);
}
else{
  console.log("you were wrong");
  console.log("keep playing to earn badges, YOU ARE A HERO...DON'T GIVE UP!")
}
console.log("your score is :", score);


} 

var obj = [{question: "What is my pet name?",answer: "sona"},{question:"What is my dream company?", answer: "microsoft"},{question:"What is my favorite free time hobby?", answer: "reading book"},{question:"Any idea about my favorite color?", answer: "black"},{question:"Well! do you know about my favorite pet? If yes than do answer it boss!!", answer: "cat"},{question:"Cold coffee or oreo shake? what makes me drooling?", answer: "cold coffee"}];

for( var i = 0; i<obj.length; i++)
{
 var cur= obj[i];
 play(cur.question,cur.answer);
 console.log(" ");
 console.log(chalk.cyan("*-*-*-*-*-*-*-*-*-*-*-*-*-*"));

}

highBadge(score);
console.log(chalk.yellow("_thanks for your time friend...hope to see you soon!"));