function MathOperation(first, second, operator)
{
    let result = 0;

    switch(operator)
    {
        case "+": result = first + second; break;
        case "-": result = first - second; break;
        case "*": result = first * second; break;
        case "/": result = first / second; break;
        case "**": result = first ** second; break;
    }

    console.log(result);
}

MathOperation(2, 2, "**");