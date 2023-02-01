const myQuestions = [
    {
        question: "1) Which country wins the 2022 Qatar Football World Cup?",
        a: 'France',
        b: 'Brazil',
        c: 'Argentina',
        d: 'Croetia',

        ans: 'ans3'
    },
    {
        question: "2) Which day we celebrated our Republic Day?",
        a: '12thMarch',
        b: '24th October',
        c: '10th February',
        d: '26th January',

        ans: 'ans4'
    },
    {
        question: "3) Who is the 'Father Of Nation?",
        a: 'Swami Vivekananda',
        b: 'Jaharlal Neheru',
        c: 'Mahatma Gandhi',
        d: 'Rabindranath Tagore',

        ans: 'ans3'
    },



];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = myQuestions[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElement) => {
        if (curAnsElement.checked) {
            answer = curAnsElement.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElement) =>
        curAnsElement.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === myQuestions[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < myQuestions.length) {
        loadQuestion();
    } else if (confirm("Do You Want To Submit?")) {
        location.reload()
    }
}

);

