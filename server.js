const express = require('express')
const app = express()
const replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

//configure the app (app.set)

//mount middleware (app.use)

// mount routes (app.get)
app.get('/greeting/:firstname', (req, res) => {
    console.log(req.params);
    res.send('Hello! Welcome! How are you, ' +req.params.firstname + '?')
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tipAmt = (req.params.total * req.params.tipPercentage) / 100;
    res.send('You should tip $' + tipAmt)
})
app.get('/magic/:query', (req, res) =>{ 
    let response = replies[Math.floor(Math.random() * replies.length)]
    res.send(`<h1>${req.params.query}  <br>  ${response}</h1>`)
})

//tell app where to listen, confirm listening
app.listen(3000, () => {
    console.log('listening now');
})