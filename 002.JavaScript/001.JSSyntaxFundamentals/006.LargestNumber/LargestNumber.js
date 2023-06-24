function Largest(fisrtNumber, secondNumber, thirdNumber)
{
    let greatest;

    if(fisrtNumber > secondNumber && fisrtNumber > thirdNumber)
    {
        greatest = fisrtNumber;
    }
    else if(secondNumber > fisrtNumber && secondNumber > thirdNumber)
    {
        greatest = secondNumber;
    }
    else if(thirdNumber > fisrtNumber && thirdNumber > secondNumber)
    {
        greatest = thirdNumber;
    }

    console.log(greatest);
}

Largest(1, 2, 3);