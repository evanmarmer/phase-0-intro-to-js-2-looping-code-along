// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  function writeCards(array, name){
    const newVariable = []
    for (let i = 0; i < array.length; i++){
        newVariable.push(`Thank you, ${array [i]}, for the wonderful ${name} gift!`)
    }
return newVariable
  }

  function countDown(){
    let i = 10
    while (i >= 0) {
        console.log(i--);
    }
  }