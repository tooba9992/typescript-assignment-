let language = ["Urdu","englis","japanise","turkish","chinese","arabic"]
for(let i=0 ; i<language.length ; i++)
{
    console.log(`"${language[i]}"`)
}
//then think of something you can store in a typescript object.
// now create a typescript object that contains the items i have listed above and print
interface languageinfo {
    name : string;
    reigon : string
}
let languageinfo : languageinfo[] =[
    { name : "Urdu" , reigon : "Pakistan"},
        {name : "English" , reigon : "America"},
        {name : "Japanese" , reigon : "Japan"},
        {name : "Turkish" , reigon : "Turkey"},
        {name : "Chinese" , reigon : "China"},
        {name : "Arabic" , reigon : "Saudia"}
];
for(let lang of languageinfo)
{
    console.log(`${lang.name}--${lang.reigon}`)
}
