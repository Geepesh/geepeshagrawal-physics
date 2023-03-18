const express = require('express')
const app = express()
const port = 3010 || process.env.PORT;
const path = require('path')
const mongoose = require('mongoose')
app.use(express.static('files'))
app.set('view engine','ejs')

require('dotenv').config()


mongoose.connect(process.env.VAR, {
    useNewUrlParser: true
});

let counterSchema = new mongoose.Schema({
    server : String,
    count : Number
}) 

let counterModel = new mongoose.model('counter',counterSchema)


app.get('/', async(req, res) => {
  let visitors = await counterModel.findOne({server : "localServer"})
  if(visitors == null){
        beginCount = new counterModel({
            server : "localServer",
            count : 1
        })

        beginCount.save()
        res.render('home',{
        count : 1
        })
    }else{
        visitors.count += 1;
        visitors.save()
        res.render('home',{
        count : visitors.count
        })
    }
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

app.get('/.well-known/acme-challenge/GoPsyg9S5F5B8dmZbec-GHaG6UfnFhBFwCyTfi9EVAI', (req, res) => {
  res.sendFile(path.join(__dirname + 'GoPsyg9S5F5B8dmZbec-GHaG6UfnFhBFwCyTfi9EVAI'))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
