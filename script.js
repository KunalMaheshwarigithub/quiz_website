
    const quizData = [
        
        { question: "Who was the first President of the United States?", a: "George Washington", b: "Thomas Jefferson", c: "Abraham Lincoln", d: "John Adams", correct: "a" },
        { question: "What year did World War II begin?", a: "1935", b: "1939", c: "1941", d: "1945", correct: "b" },
        { question: "Who wrote the Declaration of Independence?", a: "George Washington", b: "John Adams", c: "Thomas Jefferson", d: "James Madison", correct: "c" },
        
        { question: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Rome", correct: "c" },
        { question: "Which continent is the Sahara Desert located in?", a: "Asia", b: "Africa", c: "Australia", d: "North America", correct: "b" },
        { question: "Which is the largest ocean on Earth?", a: "Atlantic Ocean", b: "Indian Ocean", c: "Arctic Ocean", d: "Pacific Ocean", correct: "d" },
        
        { question: "What is the powerhouse of the cell?", a: "Nucleus", b: "Mitochondria", c: "Ribosome", d: "Endoplasmic Reticulum", correct: "b" },
        { question: "What is the basic unit of life?", a: "Tissue", b: "Cell", c: "Organ", d: "Organism", correct: "b" },
        { question: "Which part of the brain controls balance?", a: "Cerebrum", b: "Cerebellum", c: "Brainstem", d: "Thalamus", correct: "b" },
       
        { question: "What is the unit of force?", a: "Joule", b: "Newton", c: "Watt", d: "Pascal", correct: "b" },
        { question: "What is the speed of light?", a: "300,000 km/s", b: "150,000 km/s", c: "400,000 km/s", d: "500,000 km/s", correct: "a" },
        { question: "What is the law of motion formulated by Isaac Newton?", a: "First Law", b: "Second Law", c: "Third Law", d: "All of the above", correct: "d" },
        
        { question: "What is the capital of Australia?", a: "Sydney", b: "Melbourne", c: "Canberra", d: "Brisbane", correct: "c" },
        { question: "Which planet is known as the Red Planet?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "b" },
        { question: "Who is known as the Father of the Nation in India?", a: "Jawaharlal Nehru", b: "Mahatma Gandhi", c: "Sardar Patel", d: "Bhagat Singh", correct: "b" },
        
        { question: "What does GDP stand for?", a: "Gross Domestic Product", b: "Gross National Product", c: "General Domestic Product", d: "General National Product", correct: "a" },
        { question: "What is the currency of Japan?", a: "Yen", b: "Won", c: "Dollar", d: "Rupee", correct: "a" },
        { question: "Which economist is known for the concept of 'Invisible Hand'?", a: "John Maynard Keynes", b: "Adam Smith", c: "Karl Marx", d: "Milton Friedman", correct: "b" },
        
        { question: "What is the supreme law of the land in the United States?", a: "The Declaration of Independence", b: "The Constitution", c: "The Bill of Rights", d: "The Federalist Papers", correct: "b" },
        { question: "Who is known as the 'Father of Modern Political Science'?", a: "Plato", b: "Aristotle", c: "Niccolò Machiavelli", d: "John Locke", correct: "b" },
        { question: "Which branch of government is responsible for making laws?", a: "Executive", b: "Judicial", c: "Legislative", d: "Administrative", correct: "c" },
        
        { question: "What does CPU stand for?", a: "Central Processing Unit", b: "Central Programming Unit", c: "Computer Personal Unit", d: "Central Peripheral Unit", correct: "a" },
        { question: "What is the main function of the operating system?", a: "Manage hardware and software resources", b: "Run applications", c: "Perform calculations", d: "Display information", correct: "a" },
        { question: "Which language is primarily used for web development?", a: "Python", b: "C++", c: "JavaScript", d: "Java", correct: "c" },
        
        { question: "Which organ is responsible for pumping blood in the human body?", a: "Liver", b: "Heart", c: "Lung", d: "Kidney", correct: "b" },
        { question: "What is the chemical symbol for gold?", a: "Au", b: "Ag", c: "Pb", d: "Fe", correct: "a" },
        { question: "Which gas is most abundant in the Earth's atmosphere?", a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Hydrogen", correct: "c" },
        { question: "What is the longest river in the world?", a: "Amazon", b: "Nile", c: "Yangtze", d: "Mississippi", correct: "b" },
        { question: "Who developed the theory of general relativity?", a: "Isaac Newton", b: "Albert Einstein", c: "Galileo Galilei", d: "Niels Bohr", correct: "b" },
        { question: "Which planet is known as the 'Giant Planet'?", a: "Earth", b: "Mars", c: "Jupiter", d: "Venus", correct: "c" },
        { question: "What is the smallest prime number?", a: "0", b: "1", c: "2", d: "3", correct: "c" },
        { question: "In which year did India gain independence?", a: "1947", b: "1950", c: "1945", d: "1935", correct: "a" },
        { question: "What is the capital of Canada?", a: "Toronto", b: "Vancouver", c: "Ottawa", d: "Montreal", correct: "c" },
        { question: "What does HTML stand for?", a: "Hypertext Markup Language", b: "Hyperlink and Text Markup Language", c: "Hightext Markup Language", d: "Hypertextual Markup Language", correct: "a" },
        { question: "Which country is known as the Land of the Rising Sun?", a: "China", b: "Japan", c: "Thailand", d: "Vietnam", correct: "b" },
        { question: "What is the hardest natural substance on Earth?", a: "Gold", b: "Iron", c: "Diamond", d: "Graphite", correct: "c" },
        { question: "Who painted the Mona Lisa?", a: "Vincent van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci", d: "Claude Monet", correct: "c" },
        { question: "What is the largest mammal in the world?", a: "Elephant", b: "Blue Whale", c: "Giraffe", d: "Great White Shark", correct: "b" },
        { question: "What is the primary ingredient in guacamole?", a: "Tomato", b: "Onion", c: "Avocado", d: "Pepper", correct: "c" },
        { question: "What is the capital city of Italy?", a: "Rome", b: "Milan", c: "Florence", d: "Venice", correct: "a" },
        { question: "Which scientist is known for his laws of motion?", a: "Isaac Newton", b: "Albert Einstein", c: "Stephen Hawking", d: "Galileo Galilei", correct: "a" },
        { question: "What is the main language spoken in Brazil?", a: "Spanish", b: "Portuguese", c: "English", d: "French", correct: "b" },
       
    
];

// Add more question objects here following the same structure...

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

function loadQuiz() {
    quizData.forEach((data, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <h2>${data.question}</h2>
            <label><input type="radio" name="question${index}" value="a"> ${data.a}</label>
            <label><input type="radio" name="question${index}" value="b"> ${data.b}</label>
            <label><input type="radio" name="question${index}" value="c"> ${data.c}</label>
            <label><input type="radio" name="question${index}" value="d"> ${data.d}</label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    let attempted = 0;
    quizData.forEach((data, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer) {
            attempted++;
            if (answer.value === data.correct) {
                score++;
            }
        }
    });
    return { score, attempted };
}

loadQuiz();

submitButton.addEventListener("click", () => {
    const { score, attempted } = calculateScore();
    const incorrect = attempted - score;
    resultContainer.innerHTML = `
        <h2>You attempted ${attempted} questions.</h2>
        <h2>Correct answers: ${score}</h2>
        <h2>Incorrect answers: ${incorrect}</h2>
        `;
});
