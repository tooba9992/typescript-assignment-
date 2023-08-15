/*think of your favourite transportation such as motorcycle 
your cycle and makes a list that stores several examples use 
your list to print a list of statements about these items such 
as" I would like to own a honda motorcycle" using typescript*/


let motorcycles: string[] = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "Ducati"];
 //Print statements about each motorcycle
for (let motorcycle of motorcycles) {
  console.log(`I would like to own a "${motorcycle} motorcycle".`);
}
