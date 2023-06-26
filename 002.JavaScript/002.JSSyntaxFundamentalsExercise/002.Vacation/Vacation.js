function calculatePrice(peopleCount, groupType, day)
{
    let price;

    if(groupType === "Students")
    {
        if(day === "Friday")
        {
            price = peopleCount * 8.45;
        }
        else if(day === "Saturday")
        {
            price = peopleCount * 9.80;
        }
        else if(day === "Sunday")
        {
            price = peopleCount * 10.46;
        }

        if(peopleCount >= 30)
        {
            let discount = price * 0.15;
            price -= discount;
        }
    }
    else if(groupType === "Business")
    {
        if(peopleCount >= 100)
        {
            peopleCount -= 10;
        }

        if(day === "Friday")
        {
            price = peopleCount * 10.90;
        }
        else if(day === "Saturday")
        {
            price = peopleCount * 15.60;
        }
        else if(day === "Sunday")
        {
            price = peopleCount * 16;
        }
    }
    else if(groupType === "Regular")
    {
        if(day === "Friday")
        {
            price = peopleCount * 15;
        }
        else if(day === "Saturday")
        {
            price = peopleCount * 20;
        }
        else if(day === "Sunday")
        {
            price = peopleCount * 22.50;
        }

        if(peopleCount >= 10 && peopleCount <= 20)
        {
            price *= 0.05;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}
