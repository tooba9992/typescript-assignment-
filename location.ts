let travel: string[] = [
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Bora Bora, French Polynesia",
    "Iceland",
    "Kyoto, Japan",
  ];
  console.log(`"places to visit in orignial order"`)
  console.log(travel)
  //whenever we have to write or print the following array in alphabetical order 
  //we need to use sort function such as an example given below
  let sortedplaces = [...travel].sort()
  console.log(`"Alphabetical Order"`)
  console.log(sortedplaces)
  let reversesortplaces = [...travel].sort((a,b)=> b.localeCompare(a))
  console.log(`"reverse Alphabetical order"`)
  console.log(reversesortplaces)
 console.log(`"Original Order (Again)"`)
 console.log(travel)
 let reverseplaces = [...travel].reverse()
 console.log(`"Reverse Order List"`)
 console.log(reverseplaces)
 let againreverseplaces = [...reverseplaces].reverse()
 console.log(`"Again Reversed List"`)
 console.log(againreverseplaces)
