function sum(start, end)
{
    let sum = 0;
    let arr = [];

    for(let i = start; i <= end; i++)
    {
        arr[i] = i;
        sum += i;
    }
    
    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

sum(5, 10);