function sum(num)
{
    let sum = 0;
    let digitsStr = num.toString();

    for(let i = 0; i < digitsStr.length; i++)
    {
        sum += Number(digitsStr[i]);
    }

    console.log(sum);
}

sum(245678);