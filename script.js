let objAdj1 = prompt('Name a Adjective')
let objNoun1 = prompt('Give me a Animal')
let storyName1 = prompt('Give me a name')
let storyName2 =prompt('Give me a Name')
let objNoun2 =prompt('Give me a item')
let objPlace =prompt('Give me a place')
let objNoun3 =prompt('Give me a item')
let objAdj2 =prompt('Give me a adjective')
let storyName3 =prompt('Give me a name')
let storyName4 =prompt('Give me a name')
let objAdj3 =prompt('Give me a adjective')
let objNoun4 =prompt('Give me a animal')
let objAdj4 =prompt('Give me a adjective')
let objNoun5 =prompt('Give me a animal')
let objNoun6 =prompt('Give me a animal')
let objNoun7 =prompt('Give me an adjective')
let objAdj5 =prompt('Give me an adjective')
let objAdj6 =prompt('Give me an adjective')
let objNoun8 =prompt('Give me an noun')
let objAdj7 =prompt('Give me an adjective')
let objNoun9 =prompt('Give me a plural noun')
let objAdj8 =prompt('Give me an adjective')
let objAdj9 =prompt('Give me a adjective')


console.log (objAdj1)
console.log(objNoun1)
console.log(storyName1)
console.log(storyName2)
console.log(objNoun2)
console.log(objPlace)
console.log(objNoun3)
console.log(objAdj2)
console.log(storyName3)
console.log(storyName4)
console.log(objAdj3)
console.log(objNoun4)
console.log(objAdj4)
console.log(objNoun5)
console.log(objNoun6)
console.log(objAdj6)
console.log(objNoun8)
console.log(objAdj7)
console.log(objNoun9)
console.log(objAdj8)
console.log(objAdj9)

let myStory = `One day, a ${objAdj1} ${objNoun1} named ${storyName1} decided to go on an adventure. ${storyName2} had always dreamed of finding the legendary ${objNoun2} hidden deep in the ${objPlace}.
Armed with a ${objNoun3} and a ${objAdj2} map, ${storyName3} set off on the journey.Along the way, ${storyName4} encountered a ${objAdj3} ${objNoun4} who offered to help. 
The two decided to travel together, hoping that the ${objAdj4} ${objNoun5} would help them overcome the ${objNoun6} obstacles ahead. 
They crossed a ${objNoun7} and climbed a ${objAdj5} mountain, eventually reaching the entrance to the hidden cave.
Inside, they found a ${objAdj6} treasure chest filled with ${objNoun8}. But to their surprise, it wasn't gold or jewels—it was full of ${objAdj7} ${objNoun9}!
The two friends laughed and decided that the real treasure was the ${objAdj8} time they spent together. And so, they returned home, ${objAdj9} and ready for their next great adventure.`
console.log(myStory)

document.getElementById('story').innerHTML =myStory;