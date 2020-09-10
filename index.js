const express = require('express')
const app = express()
//console.log(nav)

app.set('view engine', 'ejs')

//Gallery.json-Data einbinden
const dataBase = require('./dataBase.json')

app.use(express.static('public'))

app.listen(3010, () => {
    console.log('listen at localhost3010');
})
app.get('/', (req, res) => {
    res.render('home', { title: 'HOME page', data: dataBase })
})
app.get('/newarticle', (req, res) => {
    res.render('newarticle', { title: 'new Article' })
})
app.get('/dataBase', (req, res) =>{
    res.render('home', { title: 'dataBase',
    data: dataBase})
})
app.use((req, res) => {
    res.render('404', { title: 'NoConnection', })
})