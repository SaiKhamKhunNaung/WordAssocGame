let scoreDisplay = document.getElementById('scoreDisplay')
let questionDisplay = document.getElementById('questionDisplay')

let questions = [
    {
        quiz:['value','estimate','evaluate'],
        options:['jury','assess'],
        correct: 2
    },
    {
        quiz:['foreign','national','ethnic'],
        options:['mad','exotic'],
        correct: 2
    },
    {
        quiz:['close','near','next'],
        options:['trace','adjacent'],
        correct: 2
    },
    {
        quiz:['assume','insight','weather'],
        options:['forecast','sustainable'],
        correct: 1
    },
    {
        quiz:['fast','quick','prompt'],
        options:['charity','rapid'],
        correct:2
    }
]

let score = 0
scoreDisplay.textContent= score

let clicked = []

function populateQuestions(){
        questions.forEach(questions => {
            let questionBox = document.createElement('div')
            questionBox.classList.add('questionBox')
            
            let logoDisplay = document.createElement('h2')
            logoDisplay.textContent = "~>"
            questionBox.append(logoDisplay)

            questions.quiz.forEach(tip=>{
                let tipText= document.createElement("p")
                tipText.textContent = tip
                questionBox.append(tipText)
            })

            let questionButtons = document.createElement('div')
            questionButtons.classList.add('questionButtons')
            questionBox.append(questionButtons)

            questions.options.forEach((option,optionIndex)=>{
                let questionButton=document.createElement('button')
                questionButton.classList.add('questionButton')
                questionButton.textContent= option

                questionButton.addEventListener('click',() => checkAnswer(answerDisplay,questionButton,option,optionIndex +1,questions.correct))

                questionButtons.append(questionButton)
            })

            let answerDisplay = document.createElement('div')
            answerDisplay.classList.add('answerDiplay')
            questionBox.append(answerDisplay)
            
            questionDisplay.append(questionBox)
        })
}
populateQuestions()

function checkAnswer(answerDisplay,questionButton,option,optionIndex,correctAnswer){
    if(optionIndex == correctAnswer) {
        score ++
        scoreDisplay.textContent = score
        addResult(answerDisplay,"Correct!",'correct')
    } else {
        score -- 
        scoreDisplay.textContent = score
        addResult(answerDisplay,"Wrong!",'wrong')
    }
    clicked.push(option)
    questionButton.disabled =  clicked.includes(option)
}

function addResult(answerDisplay,answer,className){
    answerDisplay.textContent = ''
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}

