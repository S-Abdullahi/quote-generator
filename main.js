// document.querySelector('button').addEventListener('click', generate)
document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

let textDisplay = document.querySelector('textarea')
let authorDisplay = document.querySelector('h4') 

// declaration of array to contain the quotes
let quoteContainer = []

function generate(){
    fetch("https://type.fit/api/quotes")
.then(res => res.json()) // parse response as JSON
.then(data => {  

  // variable to generate a random whole number between 0 and 1643
  let randomQuote = Math.floor(Math.random()*1643)

  // function to display the quote and author 
  const quoteDisplay = () => {
    textDisplay.innerText = data[randomQuote].text
    authorDisplay.innerText = `-- ${data[randomQuote].author}`
  }

  quoteDisplay()
  // saving quotes in an array
  quoteContainer.unshift(data[randomQuote])
  console.log(quoteContainer)
})
.catch(err => {
    console.log(`error ${err}`)
});
}


let a = 0

// function to view previous quote
function previous(){
  a += 1
  if(a < quoteContainer.length -1){
    textDisplay.innerText = quoteContainer[a].text
    authorDisplay.innerText = quoteContainer[a].author
  } else{
    a = quoteContainer.length -1
    textDisplay.innerText = quoteContainer[quoteContainer.length -1].text
    authorDisplay.innerText = quoteContainer[quoteContainer.length -1].author
  }
}

// function to view next quote
function next(){
  a -= 1
  if(a < 0){
    a=0
    generate()
  } else{
    textDisplay.innerText = quoteContainer[a].text
    authorDisplay.innerText = quoteContainer[a].author
  }
}

// copy function
document.querySelector('#copy').addEventListener('click', copyKey)

function copyKey(){
  document.querySelector("textarea").value;
  document.execCommand('copy')
}

