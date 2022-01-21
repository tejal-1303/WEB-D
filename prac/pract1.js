function callTwice (func){
    func();
    func();
}

const dieRoll = function (){
    let number = Math.floor(Math.random() *6) + 1;
    console.log(number);
}

// callTwice(dieRoll);
//dont use brackets as using them is asking them will make the function run first and then the value of that function is what the parent function will use


function callTenTimes (func){
    for(let i = 0; i<10; i++)
    {
        func();
    }
}

callTenTimes(dieRoll);