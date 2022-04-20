const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('Welcome to CI/CD automation world.');
})

app.listen(port, () => {
    console.log(`Server started and listening on port ${port}`)
})