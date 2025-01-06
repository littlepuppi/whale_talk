var input = `turpentine and turtles`
console.log(input.length)

let phrase = ''

// start at 0  
for(let i=0; i<input.length; i++){
 console.log(i)
 console.log(input[i])
 // is this a vowel?
  if(input[i] === 'a'){
    phrase += 'A'
  }
  if(input[i] === 'e'){
    phrase += 'EE'
  }
  if(input[i] === 'u'){
    phrase += 'UU'
  }
  if(input[i] === 'i'){
    phrase += 'I'
  }
  if(input[i] === 'o'){
    phrase += 'O'
  }
}

console.log(phrase);
