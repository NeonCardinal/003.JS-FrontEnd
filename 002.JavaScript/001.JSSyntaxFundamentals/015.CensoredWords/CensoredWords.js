function solve(text, word)
{
    let censored = text.replace(word, '*'.repeat(word.length));

    // while(censored.includes(word))
    // {
    //     censored = censored.replace(word, '*'.repeat(word.length));
    // }

    console.log(censored);
}

solve('Find the hidden word', 'hidden');
