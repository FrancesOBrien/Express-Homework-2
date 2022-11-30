const express = require('express')
const app = express()

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

//tell app where to listen, confirm listening
app.listen(3000, () => {
    console.log('listening now');
})