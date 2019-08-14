/* A random quote generator */

/* Creates the array of quote objects */
const quotes = [
  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    tags: ['motivation', 'success', 'business' ]
  },
  {
    quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    source: 'Winston Churchill'
  },
  {
    quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    source: 'Will Rogers'
  },
  {
    quote: 'You Learn More From Failure Than From Success.',
    source: 'Unknown',
    tags: ['learn', 'failure', 'success']
  },
  {
    quote: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
    source: 'Rob Siltanen',
    citation: 'briantracy.com',
    year: '1997'
  },
  {
    quote: 'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
    source: 'Johan Wolfgang Von Goethe',
  }
]


/* Returns a random quote object from the quotes array */
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length );
  return quotes[randomNumber]
}


/* Returns single random color value */
function randomColorValue() {
  let randomValue = Math.floor((Math.random()) * 255)
  return randomValue
}


/* Returns random rgb string */
function randomRGB() {
  let randomRed = randomColorValue().toString()
  let randomGreen = randomColorValue().toString()
  let randomBlue = randomColorValue().toString()
  let randomRGB = 'rgb(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ')'
  return randomRGB
}


/* Randomly changes the background color */
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomRGB()
}


/* Prints random quote with additional information on the screen and randomly changes background color of the page */
function printQuote() {
  let randomQuote = getRandomQuote()
  let htmlString = ''
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source
  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>'
  }
  if (randomQuote.tags) {
    htmlString += '<br><span class="tags">' + randomQuote.tags.join(' #') + '</span>'
  }
  htmlString += '</p>'
  divElement = document.getElementById('quote-box')
  divElement.innerHTML = htmlString

  changeBackgroundColor()
}


/* Changes quotes and background automatically after a certain amount of time */
function autoChange() {
  setInterval(printQuote, 21000)
}

autoChange()

/* When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, the`printQuote` function. */

document.getElementById('loadQuote').addEventListener("click", printQuote, false);