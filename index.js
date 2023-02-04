const express = require('express')
const app = express()
const port = 3002 || process.env.PORT;
const path = require('path')
app.use(express.static('files'))
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/derivation', (req, res) => {
  res.render('derivation')
})

app.get('/derivation/quadratic_formulae', (req, res) => {
  res.render('quadratic_formulae')
})

app.get('/under_construction', (req, res) => {
  res.render('underWork')
})


app.get('/sample_paper', (req, res) => {
  res.render('samplePaper')
})
app.get('/sample_paper/basic', (req, res) => {
  res.render('basic')
})

app.get('/sample_paper/standard', (req, res) => {
  res.render('standard')
})
app.get('/sample_paper/basic/sp1', (req, res) => {
  res.render('sp1_basic')
})
app.get('/sample_paper/basic/sp1', (req, res) => {
  res.render('sp1_basic')
})
app.get('/sample_paper/standard/sp1', (req, res) => {
  res.render('sp1_standard')
})

app.get('/.well-known/pki-validation/D1262421AFAA7F7F399F595020D02842.txt', (req, res) => {
  res.sendFile(path.join(__dirname + '/D1262421AFAA7F7F399F595020D02842.txt'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
