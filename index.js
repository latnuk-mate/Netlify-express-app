import {app} from './functions/api.js'


// for local rendering...
app.set('views', './functions/views');
app.set('view engine', 'ejs');

app.listen(4000, ()=>{
    console.log('listening on port 4000')
})