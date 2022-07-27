

//EXPRESS JS

import myExpress from 'express'
//I imported all the methods, etc.. from express module into myexpress
const app = myExpress()
//I am created a cobject for my Express so that i can use this object to
//access the methods, etc... presnt inside the myExpress
app.get('/', (req, res) => {
    res.send('Hey i am Mars')
})

app.get('/aditya', (req, res) => {
    res.send('Hey I Am Aditya')
})



app.listen(3000)



//node main.js
//localhost:3000/
//localhost:3000/aditya

//localhost:300/abc?name=aditya
//host - localhost
// port - 3000
// endpoint - /abc
//url - localhost:300/abc
//queryparameter - name=aditya
//api - http://localhost:3000/abc?name=aditya

//Query Parameter
app.get('/abc', (req, res) => {
    let a = req.query.name //aditya
    res.send(a)
})

//URI Parameter
//URL/Value - user will input
// URL/:key
//api - http://localhost:3000/xyz/aditya
app.get('/xyz/:name', (req, res) => {
    let a = req.params.name
    res.send(a)
})

app.use(myExpress.json()) //this will make server to understand json data


//Request Body Approach

//localhost:3000/rbody
app.get('/rbody', (req, res) => {
    let a = req.body.name
    res.send(a)
})

//localhost:3000/hbody
//in header type PLuto
app.get('/hbody', (req, res) => {
    let a = req.headers.name
    res.send(a)
})





// EJS Implementation Starts Here

app.set('view engine', 'ejs')

app.get('/html', (req, res) => {
    res.render('index')

})

//Implementing EJS Condition Rendering

app.get('/for', (req, res) => {
    let a = ['Apple', 'Banana', 'Pineapple']
    res.render('main', { x: a })  //x is local for node a is local for main
})