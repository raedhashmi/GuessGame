import inquirer from "inquirer";
import chalk from "chalk";

export default async() => {
function getRandom():void{
    let randomNum = Math.floor(Math.random() * 10)
    inquirer.prompt([{
        name:"userguess",
        message:"What is your guess?",
        type:"input"
    }])
    .then((answers) => {
        if(answers.userguess == ""){
            console.log(chalk.red("ERR! Cannot be blank"))
        }
        if(answers.userguess == randomNum){
            console.log("Correct")
            getRandom()
        }
        else if(answers.userguess != randomNum)(
            console.log("Incorrect. Try again\nAnswer was",randomNum)
        ),
        getRandom()
    })
    }
    getRandom()
}
