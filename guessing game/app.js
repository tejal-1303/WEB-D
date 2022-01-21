let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) //to make sure a number is entered only
{
    maximum = parseInt(prompt("Enter a valid number"));
}

let number = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;

while(parseInt(guess !== number))
{
    if(guess === 'q') break;
    attempts++;
if(guess > number)
{
   guess = prompt("Too High, Try Again!!");
}
else
{
    guess = prompt("Too Low, Try Again!!!");
}
}
if(guess === 'q')
{
    console.log("OK, YOU QUIT!")
}
else{
alert(`YOU GUESSED RIGHT! It took you ${attempts} attempts`);
}


//not workig for some reason