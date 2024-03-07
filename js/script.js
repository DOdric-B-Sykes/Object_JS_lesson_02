const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ],
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  achievedStudyGoal: false,
  addStudyTime: function (hours){
    this.hoursThisWeek = (hours += 2); /* "this." is used to selected specific object property I would like to affect */
    if (this.hoursThisWeek = (this.hoursThisWeek >= this.weeklyHourGoal)){
      achievedStudyGoal = true 
      this.celebrate = console.log(this.celebrate());
    };
  },
  celebrate: function(){
    body.classList.add("celebrate");
    success.classList.remove("hide"); /* success class is element being selcected */
    dance.classList.remove("hide"); /* dance class is the element being selected */
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");


learning.addStudyTime(10);