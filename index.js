let questions = [
  {
    id: 1,
    question: "What is your name?",
    subject: "personal info",
    topic: "personal",
    difficulty: "easy",
    marks: 20
  },
  {
    id: 2,
    question: "What is your age?",
    subject: "personal info",
    topic: "personal",
    difficulty: "easy",
    marks: 5
  },
  {
    id: 3,
    question: "What is your address?",
    subject: "personal info",
    topic: "personal",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 4,
    question: "What is your hobby?",
    subject: "personal info",
    topic: "personal",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 5,
    question: "What is your favourite food?",
    subject: "random info",
    topic: "random",
    difficulty: "easy",
    marks: 5
  },
  {
    id: 6,
    question: "What is your favourite destination?",
    subject: "random info",
    topic: "random",
    difficulty: "easy",
    marks: 5
  },
  {
    id: 7,
    question: "What is your mother tongue?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 8,
    question: "What is your birth place?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 9,
    question: "What is your 9th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 10,
    question: "What is your 10th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 11,
    question: "What is your 11th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 12,
    question: "What is your 12th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 13,
    question: "What is your 13th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 14,
    question: "What is your 14th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 15,
    question: "What is your 15th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 16,
    question: "What is your 16th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 17,
    question: "What is your 17th qstn?",
    subject: "personal info",
    topic: "personal",
    difficulty: "easy",
    marks: 5
  },
  {
    id: 18,
    question: "What is your 18th qstn?",
    subject: "personal info",
    topic: "personal",
    difficulty: "easy",
    marks: 5
  },
  {
    id: 19,
    question: "What is your 19th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 20,
    question: "What is your 20th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 21,
    question: "What is your 21st qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 22,
    question: "What is your 22nd qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 23,
    question: "What is your 23rd qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 24,
    question: "What is your 24th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  },
  {
    id: 25,
    question: "What is your 25th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "medium",
    marks: 5
  },
  {
    id: 26,
    question: "What is your 26th qstn?",
    subject: "random info",
    topic: "random",
    difficulty: "difficult",
    marks: 5
  }
];

let totalMarks = 100; // maximum marks
let difficultyLevel = {
  easy: 20, // percent of total marks
  medium: 40,
  difficult: 40
};

// function to filter questions of specific difficulty level
function filterArr(arr, difficultyLevel) {
  let resultArr = arr.filter((data) => {
    return data.difficulty === difficultyLevel;
  });
  return resultArr;
}

// Generate questions
function QuestionsArr(totalMarks, diffLevel) {
  let currentMarks = 0;
  let marksPerDiffLevel = (totalMarks * difficultyLevel[diffLevel]) / 100;
  let diff = diffLevel;
  let filteredQuestions = filterArr(questions, diff);
  let selectedQstn = [];

  while (currentMarks < marksPerDiffLevel) {

    if(currentMarks === marksPerDiffLevel)
      break;

    if (filteredQuestions.length && currentMarks < marksPerDiffLevel) {
      var randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      if (filteredQuestions[randomIndex].marks + currentMarks <= marksPerDiffLevel ) {
        selectedQstn.push(filteredQuestions[randomIndex]);
        currentMarks += filteredQuestions[randomIndex].marks;
      }
    }
  }
  return selectedQstn;
}

function createQuestions() {
  let easyQstns = QuestionsArr(totalMarks, "easy");
  let mediumQstns = QuestionsArr(totalMarks, "medium");
  let difficultQstns = QuestionsArr(totalMarks, "difficult");
  let qstns = [easyQstns, mediumQstns, difficultQstns];
  console.log(qstns);
  return qstns;
}
createQuestions();
