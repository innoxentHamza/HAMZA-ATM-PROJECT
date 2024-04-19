#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 100000;
let mypin = 1211;
console.log(chalk.blue("\n\tWelcome to code with HAMZA - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.green("enter your pin code: "),
        type: "number",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log(chalk.yellow("\ncorrect pin code your Successfully!\n"));
    console.log(`curent Account balance is ${mybalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "select one option",
            type: "list",
            choices: ["withdraw", `check balance`],
        },
    ]);
    if (operationAns.operations === `check balance`) {
        console.log(`i have so much money in my ATM machine`);
        console.log(chalk.gray(`\n curent Account balance is   ${mybalance}\n`));
    }
    if (operationAns.operations === "withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: "Select a Withdrawal Method :",
                type: "list",
                choices: ["fast cash", "Enter Amount"],
            },
        ]);
        if (withdraw.withdrawMethod === `fast cash`) {
            let fastcash = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "Select Amount :",
                    type: "list",
                    choices: [`2500`, `3500`, `5000`, `45000`, `25000`, `150000`],
                },
            ]);
            if (fastcash.fastcash < mybalance) {
                {
                    mybalance -= fastcash.fastcash;
                    console.log(`${fastcash.fastcash} withdraw Successfully`);
                    console.log(chalk.blue(`your remaining balance is: ${mybalance}`));
                }
            }
            else
                console.log(chalk.red("insufficient mybalance"));
        }
        if (withdraw.withdrawMethod === `Enter Amount`) {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount you  to withdraw :",
                    type: "number",
                },
            ]);
            if (amountAns.amount > mybalance) {
                console.log(chalk.red("insufficient mybalance"));
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw Successfully`),
                    console.log(`your remaining balance is: ${mybalance}`);
            }
        }
    }
}
else {
    console.log("Invalid pin code");
}
