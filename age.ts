let Age = 23
if(Age < 2)
{
    console.log(`the person is a baby`)
}
else if(Age == 2 || Age < 4)
{
    console.log(`the person is a todler`)
}
else if(Age == 4 || Age < 13)
{
    console.log(`the person is a kid`)
}
else if(Age == 13 || Age < 20)
{
    console.log(`the person is a teenager`)
}
else if(Age == 20 || Age < 65)
{
    console.log(`the person is an adult`)
}
else 
{
    console.log(`greater than 65`)
}