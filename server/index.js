const app = require('./App')
const path = require('path')


//serve static assets if in production (serve the react app) ==> (have to add heroku-postbuild to package.json)
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log('server is listening on port ' + port)
})