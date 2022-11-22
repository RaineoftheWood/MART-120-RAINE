function setup()
{
    createCanvas(600,800);
}
function draw()
{
    // create sum and two numbers
    var sum;
    var number1;
    var number2;

    // calculate the first sum
    number1 = 4;
    number2 = 5;    
    calculateSum(number1, number2, 100, 200); // call the calculateSum function

    // calculate the second sum
    number3 = 3;
    number4 = 2;
    calculateSum(number3, number4, 200, 200); // call the calculateSum function

    // Define the calculateSum function    
    function calculateSum(number1, number2, x, y)
    {
        sum = number1 + number2;
        text("Sum: " + sum, x, y);
    }
}