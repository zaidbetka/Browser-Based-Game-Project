/*-------------- Constants -------------*/
const answers = {
    q1: "Luffy",
    q2: "Swordsman",
    q3: "Drum Island",
    q4: "Sanji",
    q5: "Meat"
};

/*---------- Variables (state) ---------*/
let score = 0;

/*----- Cached Element References  -----*/
const form = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");

/*-------------- Functions -------------*/
function calculateScore() {
    score = 0; // Reset score for each calculation
    for (let key in answers) {
        const selectedOption = form.elements[key].value;
        if (selectedOption === answers[key]) {
            score++;
        }
    }
}

function renderResult() {
    resultDiv.innerHTML = `<h2>Your Score: ${score}/5</h2>`;
    const image = document.createElement("img");

    if (score >= 3) {
        image.src = "https://gifdb.com/images/high/one-piece-funny-luffy-0z6tyrl7fuzfwmid.gif";
        image.alt = "Luffy celebrating";
    } else {
        image.src = "https://media3.giphy.com/media/UTek0q3N8osh8agH4Y/giphy.gif";
        image.alt = "Luffy looking defeated";
    }

    resultDiv.appendChild(image);
}

/*----------- Event Listeners ----------*/
submitBtn.addEventListener("click", () => {
    calculateScore();
    renderResult();
});
