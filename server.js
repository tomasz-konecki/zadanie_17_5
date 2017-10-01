const express = require('express'),
    app = express();

app.use('/store', (req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/store', (req, res) => {
    res.send('To jest sklep');
});

app.listen(3000);

app.use((req, res, next) => {
    res.status(404)
        .send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});