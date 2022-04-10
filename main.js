document.querySelector('button').addEventListener('click', generate)

function generate(){
    fetch("https://type.fit/api/quotes")
.then(res => res.json()) // parse response as JSON
.then(data => {  
  let randomQuote = Math.floor(Math.random()*1643)
  document.querySelector('h3').innerText = data[randomQuote].text
  document.querySelector('h4').innerText = `-- ${data[randomQuote].author}`
})
.catch(err => {
    console.log(`error ${err}`)
});
}


