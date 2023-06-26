function count(text, searchedWord)
{
    let words = text.split(' ');
    let count = 0;

    for(let word of words)
    {
        if(word === searchedWord)
        {
            count++;
        }
    }

    console.log(count);
}

count('softuni is great place for learning new programming languages',
'softuni');