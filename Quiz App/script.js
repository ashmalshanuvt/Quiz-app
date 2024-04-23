const quizData = [
  {
    questions: "1.What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Perth",
    d: "Canberra",
    correct: "d",
  },
  {
    questions: "2.Which is the biggest continent in the world?",
    a: "North America",
    b: "Asia",
    c: "Africa",
    d: "Europe",
    correct: "b",
  },
  {
    questions: "3.Which is the longest river in the world?",
    a: " Great Ganga",
    b: "Amazone",
    c: "Nile",
    d: "Niger",
    correct: "c",
  },
  {
    questions: "4.Which is the largest ocean in the world?",
    a: "Indian Ocean",
    b: "Atlandic Ocean",
    c: "Artic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
  {
    questions: "5.Which is the smallest continent in the world?",
    a: "Asia",
    b: "Africa",
    c: "Australia",
    d: "Pacific Ocean",
    correct: "d",
  },
];

//get elements from DOM
let questionEl = document.getElementById("questions");
let aLabel = document.querySelector(".aLabel");
let bLabel = document.querySelector(".bLabel");
let cLabel = document.querySelector(".cLabel");
let dLabel = document.querySelector(".dLabel");

let nextButton = document.getElementById("next-btn");
let answers = document.querySelectorAll(".answer");
let container = document.querySelector("#container");
let thanks = document.querySelector("#thanks");
let wrong = document.querySelector(".wrong");
let correct = document.querySelector(".correct");

//Check Submitted Answer
let counter = 0;
function showQuestionAnswer() {
  answers.forEach(function (answer) {
    if (answer.checked === true) {
      counter += 1;

      if (answer.id === quizData[counter - 1].correct) {
        // alert('Congrats! your answer is correct !')
        answer.classList.add("correct-result");
        answer.checked = true;
        correct.style.cssText = `display:block ; `;
        setTimeout(() => {
          answer.classList.remove("correct-result");
          answer.checked = false;

          correct.style.cssText = `display:none ; `;
        }, 1000);
      } else {
        // alert('your answer is wrong , try again....')
        answer.classList.add("wrong-result");
        answer.checked = true;
        wrong.style.cssText = `display:block ; `;
        setTimeout(() => {
          answer.classList.remove("wrong-result");
          answer.checked = false;
          wrong.style.cssText = `display:none ; `;
        }, 1000);
      }
    }
  });

  // Display UI

  if (counter === 0) {
    if (quizData.length == counter) {
      container.classList.add("hide");
      thanks.innerHTML = "Thank you for participation";
    } else {
      questionEl.innerHTML = quizData[counter].questions;
      aLabel.innerHTML = quizData[counter].a;
      bLabel.innerHTML = quizData[counter].b;
      cLabel.innerHTML = quizData[counter].c;
      dLabel.innerHTML = quizData[counter].d;
    }
  } else {
    setTimeout(() => {
      if (quizData.length == counter) {
        container.classList.add("hide");
        thanks.innerHTML = "Thank you for participation";
      } else {
        questionEl.innerHTML = quizData[counter].questions;
        aLabel.innerHTML = quizData[counter].a;
        bLabel.innerHTML = quizData[counter].b;
        cLabel.innerHTML = quizData[counter].c;
        dLabel.innerHTML = quizData[counter].d;
      }
    }, 1000);
  }
}
showQuestionAnswer();

nextButton.addEventListener("click", showQuestionAnswer);

// function submitAnswer(){
//     nextButton.addEventListener('click', function(event){
//         event.preventDefault()

//         //Task 3
//         //get user answer here
//        let userAnswer = getUserAnswer()
//        if(userAnswer == quizData[0].correct){
//         alert("Congrats! your answer is correct !");
//        }else{
//         alert("your answer is wrong , try again....")
//        }
//     })

// }

//function invokes
// submitAnswer();

//get user answer

// function getUserAnswer() {
//   let userAnswer;
//   answers.forEach(function (answer) {
//     if (answer.checked === true) {
//       userAnswer = answer.id;
//     }
//   });
//   return userAnswer;
// }
