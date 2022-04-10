const express = require('express');
const app = express();
const ejs = require('ejs');
const input = require("readline-sync");
app.set('view engine', 'ejs');
app.set('port', 3000);
//----JSON FILES------//
interface Question {
    q: string;
    correctAnswer: number;
    answers: string[];
}
interface Difficulty {
    questions: Question[];
}
interface RootObject {
    difficulty: Difficulty[];
}
let question: RootObject = require("./quisteon.json");
//----JSON FILES------//
//----Var------//
let score: number = 0
let vraag: string
let antwoord: string
//----Var------//

//----server opstarten------//
console.log("making home")
refrechSpel()
app.get('/', (req: any, res: any) => {
    res.render('home');
    console.log("home made")
    refrechSpel()
    chuisDifficulty()
})
app.listen(app.get('port'), () => console.log('[server] http://localhost:' + app.get('port')));
//----server opstarten------//

//-----Functie----//
function chuisDifficulty() {
    console.log("making spel")
    for (let d: number = 0; d < question.difficulty.length; d++) {
        chooseQuest(d)
    }
}
function chooseQuest(d: number) {
    for (let q: number = 0; q < 2; q++) {
        let quistnr: number = between(0, question.difficulty[d].questions.length)
        vraag = question.difficulty[d].questions[quistnr].q
        chooseAnswers(d, quistnr)

    }
    return (vraag)
}
function chooseAnswers(d: number, quistnr: number) {
    for (let a = 0; a < question.difficulty[d].questions[quistnr].answers.length; a++) {
        antwoord = question.difficulty[d].questions[quistnr].answers[a]
        refrechSpel()
    }
    //askCA(d, quistnr)
    return (antwoord)
}
function refrechSpel() {
    app.get('/spel', (req: any, res: any) => {
        res.render('website', { vr: vraag, ant: antwoord });
        console.log("spel made")
    })
}
function askCA(d: number, quistnr: number) {
    let answer: number
    let correctAnswer: number
    correctAnswer = question.difficulty[d].questions[quistnr].correctAnswer
    console.log("\n" + "What is the Correct answere ? " + "\n");
   
}
function between(min: number, max: number) {
    return Math.floor(((Math.random() * 10 + min) % max))
}
//-----Functie----//
export { }