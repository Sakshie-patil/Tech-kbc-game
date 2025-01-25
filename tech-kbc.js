let startBtn = document.querySelector("#start-btn");
let game = document.querySelector(".game-container");
let messageQ = document.querySelector(".msg1");
let messageOpt = document.querySelector(".msg2");
let messageAns = document.querySelector(".msg3");
let nextBtn = document.querySelector(".next-btn");
let homeBtn = document.querySelector(".home-btn");
let home = document.querySelector(".home");
let msg3Container = document.querySelector(".msg3-container");
let lifeline = document.querySelector(".lifeline");
let lifelineBtn = document.querySelector(".lifeline-btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let resetGame =  document.querySelector(".reset-game");
let resetBtn = document.querySelector("#reset-btn");
let scoreBoard = document.querySelector(".score-board");
let score = document.querySelector(".score");
let allButtons = document.querySelector(".option-btn");

let count1=0;
let count2=0;

let currentScore = 0;

game.classList.remove("hide");
lifelineBtn.classList.remove("hide");
scoreBoard.classList.add("hide");
lifelineBtn.addEventListener("click" , () => {
    btn1.classList.remove("hide");
    btn2.classList.remove("hide");
    lifelineBtn.classList.add("hide");
});

///lifeline1- 50-50 start

btn1.addEventListener("click" , () => {

if(count2 >= 1) {
    alert("lifeline already used");
   return;
}
let currentQuestion = questions[answeredQuestions[answeredQuestions.length - 1]];

// Get the indexes of the incorrect answers
let incorrectIndexes = [];
for (let i = 0; i < currentQuestion.options.length; i++) {
    if (i !== currentQuestion.correectAnswer) {
        incorrectIndexes.push(i);
    }
}

// Randomly remove two incorrect options
while (incorrectIndexes.length > 2) {
    const randIdx = Math.floor(Math.random() * incorrectIndexes.length);
    incorrectIndexes.splice(randIdx, 1); // Remove one incorrect option
}

// Remove the incorrect options from the DOM
let optionButtons = document.querySelectorAll(".option-btn");
optionButtons.forEach((button, index) => {
    if (incorrectIndexes.includes(index)) {
        button.style.display = "none";  // Hide the incorrect options
    }
});
count2++;
});

//50-50 end


///lifeline2 - swap question
btn2.addEventListener("click" , () => {
    if(count1 >= 1) {
        alert("lifeline already used");
       return;
    }
    console.log("button2 clicked");
    messageOpt.innerText = "";
    startGame();
    btn1.classList.add("hide");
    btn2.classList.add("hide");
    count1++;
    });

    //swap question end

//database 
let answeredQuestions = [];

const questions = [
    {
        question : "Q. What does HTML stand for?" , 
        options : [ "a) Hyper Text Markup Language" ,   "b) Home Tool Markup Language" , "c) Hyperlinks and Text Markup Language" , "d) High Tech Machine Language"] ,
        correctAnswer  : 0

    },

    {
        question : "Q. What is the latest version of CSS?",
        options : ["a) CSS1" , "b) CSS2" , "c) CSS3" , "d) CSS4"] ,
        correctAnswer : 2
    } ,

    {
        question : "Q. What does URL stand for?",
        options : ["a) Uniform Resource Locator" ,
           "b) Universal Resource Locator",
            "c) Uniform Retrieval Locator",
          "d) Unified Resource Locator]"],
          correctAnswer : 0

    } ,

    {
        question : "Q. What does DNS stand for?",
        options : ["a) Domain Name System" ,
        "b) Data Network System" ,
       "c) Domain Name Service" ,
       "d) Dynamic Network System"],
       correctAnswer : 0
    } ,

    {
        question:"Q. Which is an open-source operating system?" ,
        options : [ "a) Windows" , "b) macOS" , "c) Linux" ,"d) iOS"] ,
        correctAnswer : 2
    },

    {
        question:"Q. What does IP stand for in networking?",
        options : [ "a) Internet Protocol" ,
        "b) Internal Process" ,
        "c) Information Protocol" ,
        "d) Interconnection Platform"],
        correctAnswer : 0
    },

    {
        question : "Q. Which of the following is a mutable data type in Python?",
        options : [ "a) String" ,
        "b) Tuple" ,
        "c) List" ,
        "d) Integer"],
        correctAnswer : 2
    },

    {
        question: "Q. In object-oriented programming, which of the following best describes encapsulation?",
        options: [
            "a) The ability to inherit properties of another class",
            "b) The process of hiding the implementation details of a class",
            "c) The process of overriding methods in a class",
            "d) The creation of reusable code modules"
        ],
        correctAnswer: 1
    },

    {
        question: "Q. What is the purpose of the `break` statement in programming?",
        options: [
            "a) To exit the current iteration of a loop and continue with the next one",
            "b) To terminate the execution of the program",
            "c) To exit a loop or switch statement immediately",
            "d) To pause the execution of a program"
        ],
        correctAnswer: 2
    },

    {
        question: "Q. In SQL, what does the `GROUP BY` clause do?",
        options: [
            "a) Combines data from multiple tables",
            "b) Groups rows that have the same values in specified columns",
            "c) Filters data from a table",
            "d) Limits the number of rows returned"
        ],
        correctAnswer: 1
    },

    {
        question: "Q. What is the primary purpose of a subnet mask in networking?",
        options: [
            "a) To identify the default gateway",
            "b) To divide an IP address into network and host portions",
            "c) To assign IP addresses to devices automatically",
            "d) To encrypt network traffic"
        ],
        correctAnswer: 1
    },

    {
        question: "Q. What does the `ps` command do in Linux?",
        options: [
            "a) Prints files to a printer",
            "b) Displays information about active processes",
            "c) Terminates a process",
            "d) Changes the priority of a process"],
        correctAnswer: 1
    },

    {
        question: "Q. Which of the following is a NoSQL database?",
        options: ["a) PostgreSQL", "b) Redis", "c) SQLite", "d) MariaDB"],
        correctAnswer: 1
    },

    {
        question: "Q. In SQL, which of the following is used to create a view?",
        options: ["a) CREATE TABLE", "b) CREATE VIEW", "c) SELECT", "d) INSERT"],
        correctAnswer: 1
    },

    {
        question: "Q. Which command is used to list all branches in Git?",
        options: ["a) git log", "b) git branch", "c) git checkout", "d) git status"],
        correctAnswer: 1
    },

    {
        question: "Q. Which is not a relational database?",
        options: ["a) MongoDB", "b) MySQL", "c) PostgreSQL", "d) Oracle"],
        correctAnswer: 0
    },
]


//to check choosen option is correct or incorrect
let checkWinner = (selecedIdx , correctIdx) => {
    

if(selecedIdx == correctIdx) {

    messageAns.innerText = "You made a correct choice";
    messageAns.style.backgroundColor = "green";
    messageAns.style.color = "white";
    nextBtn.classList.remove("hide");
    lifeline.classList.add("hide");
    count1=0;
    count2=0;

    let score = document.querySelector(".score-board p:last-child"); 

    currentScore +=1;
    score.innerText = currentScore;

}
else {
    messageAns.innerText = "oops! you made wrong choice better luck next time!";
    messageAns.style.backgroundColor = "red";
    messageAns.style.color = "white";
    home.classList.remove("hide");
    lifeline.classList.add("hide");
    exitGame();

}
}

//for generating random question everytime user starts new game
let genRandom= ()=> {
    let random;
    do {
        random = Math.floor(Math.random() * questions.length);
    } while (answeredQuestions.includes(random)); 
      return random;
} 

//startgame func (main func)
let startGame = () => {
    let count1=0;
    let count2=0;

    resetGame.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    lifeline.classList.remove("hide");
    lifelineBtn.classList.remove("hide");
    game.classList.add("hide");
    messageAns.innerText = "select correct answer";
    messageAns.style.backgroundColor = "#D8A25E";
    messageAns.style.color = "#0F1515";
    home.classList.add("hide");

    if(answeredQuestions.length ==questions.length ) {
        messageQ.innerText = "game end you answered all the questions!!"
        messageOpt.innerText = "";
        lifeline.classList.add("hide");
        exitGame();
        return ;
    }

    let randomIdx = genRandom(); //generate random q index
    answeredQuestions.push(randomIdx);

    let currentQuestion = questions[randomIdx];
   messageQ.innerText =  currentQuestion.question;
   msg3Container.classList.remove("hide");
   lifeline.classList.remove("hide");

   currentQuestion.options.forEach((option , index) => {
    const button = document.createElement("button");
    button.innerText=option;
    button.className = "option-btn";
    messageOpt.appendChild(button);

    button.addEventListener("click" , () => {
        checkWinner(index ,currentQuestion.correctAnswer)

        button.disabled = true;
    });
  });
}

// for resetting the game
resetBtn.addEventListener("click" , ()=> {
    lifeline.classList.add("hide");
    game.classList.remove("hide");
    messageOpt.innerHTML = "";
    messageQ.innerText = "";
    messageAns.innerText = "";
    messageAns.backgroundColor = "#0F1515";
    nextBtn.classList.add("hide");
    resetBtn.classList.add("hide");
    home.classList.add("hide");

})

/// when user chose 1 correct answer and want to go to next question
    nextBtn.addEventListener("click" , ()=> {
        messageOpt.innerHTML = "";
        messageQ.innerText = "";
        messageAns.innerText = "select correct answer";
        messageAns.style.backgroundColor = "#D8A25E";
        messageAns.style.color = "#0F1515";
        nextBtn.classList.add("hide");
        startGame();
    });


//when user select incorrect answer and game ended then want ot come back to home page
let exitGame = () => {
    homeBtn.addEventListener("click" , () => {
    resetBtn.classList.add("hide");
    home.classList.add("hide");
    game.classList.remove("hide");
    messageOpt.innerText = "";
    messageQ.innerText = "";
    msg3Container.classList.add("hide");
    scoreBoard.classList.add("hide");
    nextBtn.classList.add("hide");
    });
};

//when user clicks on start button
startBtn.addEventListener("click" , startGame);