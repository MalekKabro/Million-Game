
const fs = require('fs')
const fse = require('fs-extra')
const input = require("readline-sync");
const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.set('port', 3000);
/*------------------------*/

// app.get('/', (req: any, res: any) => {
//     res.render('index');
// });


// app.listen(app.get('port'),
//     () => console.log('[server] http://localhost:' + app.get('port')));


main()

let randomGetal: number = 0;
    randomGetal = Math.random() * 10;
    console.log(Math.floor(randomGetal))

function main() {

    showStart()
}

function showStart() {
    let score: number = 0
    let q: number = 0, j: number
    let arry: number[] = []

    for (let i = 1; i <= 10; i = +3) {
        q = between(i-1, i + 2)
        
        while (checkArray(arry, q)) {
            q = between(i-1, i + 2)
        }

        console.log("\n\n"+q+"\n\n")
        j = arry.length
        arry[j] = q

        if (question(q.toString())) {
            console.log("Bravoo")
            score++
            
            console.clear()
        }
        else console.log("Noooooo")
        console.clear()
    }
    console.log("your score is " + score)
}

function checkArray(tab: number[], rand: number) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == rand) {
            return (true)
        }
    }
    return (false)
}

/*-------------------------------*/
function question(quest: string) {
    fs.readFileSync("question/" + quest, 'utf8');
    let text1 = fs.readFileSync("question/" + quest, 'utf8');
    let ligne: string = "";
    let text: string = text1;
    let correctAnswer: number
    let answer: number

    correctAnswer = readShow(text)
    answer = parseInt(input.question("What is the Correct answere ?  "));
    return (answer == correctAnswer)
}


function ligneReturn(info: string) {
    let ligne2: string = "";
    for (let i = 0; info[i]; i++) {
        if (info[i] == "\n") {
            break;
        }
        ligne2 = ligne2 + info[i]
    }
    ligne2 = ligne2 + "\n"
    return (ligne2)
}

function readShow(info: string) {
    let ans: number = 0
    let j: number = 0
    let ligne2: string = "";
    while (j < info.length) {
        ligne2 = ligneReturn(info)
        info = info.replace(ligne2, "");
        j++;
        if (j == 2) {

            ans = parseInt(ligne2)
            continue
        }
        process.stdout.write(ligne2)
    }
    return (ans)
}

function between(min: number, max: number) {
    return Math.floor(((Math.random()*10+min)%max))+1
}

export { }