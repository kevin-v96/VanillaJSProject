const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile('index.html');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
})