function makeBetweenFunc (min, max)
{
    return function(num)
    {
        return num >= min && num <= max
    }
}





// function makeBetweenFunc (min, max)
// {
//     return function(num)
//     {
//         return num >= min && num <= max
//     }
// }
// undefined
// makeBetweenFunc(50,100)
// ƒ (num)
//     {
//         return num >= min && num <= max
//     }
// const isadult = makeBetweenFunc(0,18)
// undefined

//how we passed in the terminal


const square = {
    area(side) {
        let theArea = side * side
        return theArea
    },
    perimeter(side) {
        let thePeri = 4* side
        return thePeri
    }
}